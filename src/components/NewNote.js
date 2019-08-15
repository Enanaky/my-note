import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as noteActions from '../redux/actions/noteActions';
import PropTypes from 'prop-types';

import NewNoteForm from './layout/NewNoteForm';
import EditNoteForm from './layout/EditNoteForm';

function NewNote(props) {
  const [newNote, setNewNote] = useState({
    type: 'note',
    title: null,
    content: null
  });

  function handleChange(event, defaultContent) {
    if (props.note) {
      switch (event.target.name) {
        case 'title':
          setNewNote({ ...newNote, title: event.target.value, content: defaultContent });
          break;
        case 'content':
          setNewNote({ ...newNote, title: defaultContent, content: event.target.value });
          break;
        default:
      }
    } else {
      switch (event.target.name) {
        case 'title':
          setNewNote({ ...newNote, title: event.target.value });
          break;
        case 'content':
          setNewNote({ ...newNote, content: event.target.value });
          break;
        default:
      }
    }
  }

  function submitForm(event) {
    //if the note already exist, just update it...
    if (props.note) {
      event.preventDefault();
      updateChanges(newNote, props.note.note.id);
    } else {
      //if it's a new note then create one...
      event.preventDefault();
      props.create(newNote);
      props.newNoteOff();
    }
  }

  function updateChanges(changes, id) {
    props.newNoteOff();
    console.log('updating note: ', id);
    props.update(id, changes);
  }

  function handleDelete(id) {
    console.log('deleting note: ', id);
    props.newNoteOff();
    props.delete(id);
  }
  if (props.note) {
    return (
      <div className="new-note">
        <EditNoteForm
          note={props.note.note}
          handleSubmit={submitForm}
          handleChange={handleChange}
          updateChanges={updateChanges}
          handleDelete={handleDelete}
        />
      </div>
    );
  } else {
    return (
      <div className="new-note">
        <NewNoteForm
          handleSubmit={submitForm}
          handleChange={handleChange}
          newNoteOff={props.newNoteOff}
          // deleteNote={deleteNote}
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
    create: newNote => dispatch(noteActions.createNote(newNote)),
    delete: id => dispatch(noteActions.deleteNote(id)),
    update: (id, newNote) => dispatch(noteActions.updateNote(id, newNote))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
