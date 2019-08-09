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
  // display: 'none'

  function handleClick(id) {
    notes.forEach(note => {
      if (note.id === id) {
        setNote({ note });
        setMustDisplayNewNote(true);
      }
    });
  }
  // onClick={() => setMustDisplayNewNote(false)}
  return (
    <div className="dashboard">
      <Navbar />

      {mustDisplayNewNote === true ? (
        <div className="new-note-container">
          <NewNote note={note} setMustDisplayNewNote={setMustDisplayNewNote} />
        </div>
      ) : null}
      <NoteList notes={notes} handleClick={handleClick} />
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
  firestoreConnect([{ collection: 'notes' }])
)(Dashboard);
