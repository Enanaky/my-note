import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as noteActions from '../redux/actions/noteActions';
import PropTypes from 'prop-types';

import NewNoteForm from './layout/NewNoteForm';
import EditNoteForm from './layout/EditNoteForm';

function NewNote(props) {
  const [form, setForm] = useState({
    type: 'note',
    title: null,
    content: null
  });

  useEffect(() => {
    // If I am editin an existing note...
    if (props.note) {
      setForm({ ...form, title: props.note.note.title, content: props.note.note.content });
    }
  }, []);

  function handleChange(event) {
    // If I want to edit a note...
    if (props.note) {
      switch (event.target.name) {
        case 'title':
          setForm({ ...form, title: event.target.value });
          break;
        case 'content':
          setForm({ ...form, content: event.target.value });
          break;
        default:
      }
    } else {
      // If I want to create a note...
      switch (event.target.name) {
        case 'title':
          setForm({ ...form, title: event.target.value });
          break;
        case 'content':
          setForm({ ...form, content: event.target.value });
          break;
        default:
      }
    }
  }

  function submitForm(event) {
    if (props.note) {
      //if the note already exist, just update it...
      event.preventDefault();
      updateChanges(props.note.note.id, form);
    } else {
      //if it's a new note then create one...
      event.preventDefault();
      props.create(form);
      props.formOff();
    }
  }

  function updateChanges(id, changes) {
    props.formOff();
    props.update(id, changes);
  }

  function handleDelete(id) {
    props.formOff();
    props.delete(id);
  }

  if (props.note) {
    return (
      <div className="new-note">
        <EditNoteForm
          note={props.note.note}
          handleSubmit={submitForm}
          handleChange={handleChange}
          formOff={props.formOff}
          handleDelete={handleDelete}
          form={form}
        />
      </div>
    );
  } else {
    return (
      <div className="new-note">
        <NewNoteForm
          handleSubmit={submitForm}
          handleChange={handleChange}
          formOff={props.formOff}
        />
      </div>
    );
  }
}

NewNote.propTypes = {
  note: PropTypes.object
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    create: form => dispatch(noteActions.createNote(form)),
    delete: id => dispatch(noteActions.deleteNote(id)),
    update: (id, form) => dispatch(noteActions.updateNote(id, form))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
