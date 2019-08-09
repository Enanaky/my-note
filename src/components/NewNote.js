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

  function handleChange(event) {
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

  function handleSubmit(event) {
    event.preventDefault();

    props.dispatch(noteActions.createNote(newNote));
    event.currentTarget.reset();
  }

  function handleDiscard(event) {
    console.log(event.target);
  }

  if (props.note) {
    return (
      <div className="new-note">
        <EditNoteForm
          note={props.note.note}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleDiscard={handleDiscard}
        />
      </div>
    );
  } else {
    return (
      <div className="new-note">
        <NewNoteForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleDiscard={handleDiscard}
        />
      </div>
    );
  }
}

NewNote.propTypes = {
  dispatch: PropTypes.func.isRequired,
  note: PropTypes.object
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NewNote);
