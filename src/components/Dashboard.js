import React, { useState, useEffect } from 'react';
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
  const { notes, auth } = props;

  function handleClick(id) {
    notes.forEach(note => {
      if (note.id === id) {
        setNote({ note });
      }
    });
  }

  return (
    <div className="dashboard">
      <Navbar />
      <NewNote note={note} />
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
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'notes' }])
)(Dashboard);
