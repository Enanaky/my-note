import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Navbar from './Navbar';
import NewNote from './NewNote';
import NoteList from './layout/NoteList';
import SideNav from './layout/SideNav';

function Dashboard(props) {
  const [note, setNote] = useState();
  const [mustDisplayNewNote, setMustDisplayNewNote] = useState(false);

  const { notes } = props;

  function newNoteOn(id) {
    notes
      ? notes.forEach(note => {
          if (note.id === id) {
            setNote({ note });
          }
        })
      : null;
    setMustDisplayNewNote(true);
  }
  function newNoteOff() {
    setMustDisplayNewNote(false);
  }

  return (
    <div className="dashboard">
      <Navbar newNoteOn={newNoteOn} />
      {mustDisplayNewNote === true ? (
        <div className="new-note-container">
          <NewNote note={note} newNoteOff={newNoteOff} />
        </div>
      ) : null}
      <NoteList notes={notes} newNoteOn={newNoteOn} />
      <SideNav />
    </div>
  );
}

Dashboard.propTypes = {
  notes: PropTypes.array,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log(state);

  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: 'notes',
        where: [['authorId', '==', props.auth.uid]]
      }
    ];
  })
)(Dashboard);
