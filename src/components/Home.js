import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Navbar from './Navbar';
import NewNote from './NewNote';
import NoteList from './layout/NoteList';
import NoteGrid from './layout/NoteGrid';
import SideNav from './layout/SideNav';

function Home({ notes, profile }) {
  const [note, setNote] = useState();
  const [view, setView] = useState({
    grid: true,
    theme: 'default'
  });
  const [mustDisplayNewNote, setMustDisplayNewNote] = useState(false);

  // useEffect(() => {}, [notes]);

  function formOn(id) {
    notes
      ? notes.forEach(note => {
          if (note.id === id) {
            setNote({ note });
          }
        })
      : null;
    setMustDisplayNewNote(true);
  }
  function formOff() {
    setMustDisplayNewNote(false);
    setNote();
  }
  function changeView() {
    view.grid === true ? setView({ ...view, grid: false }) : setView({ ...view, grid: true });
  }

  return (
    <div className="home">
      <Navbar formOn={formOn} view={view} changeView={changeView} />
      {mustDisplayNewNote === true ? (
        <div className="new-note-container">
          <NewNote note={note} formOff={formOff} />
        </div>
      ) : null}
      <div className="dashboard">
        {view.grid === true ? (
          <NoteGrid notes={notes} formOn={formOn} />
        ) : (
          <NoteList notes={notes} formOn={formOn} />
        )}
      </div>
      <SideNav profile={profile} />
    </div>
  );
}

Home.propTypes = {
  notes: PropTypes.array,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state);

  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: 'notes',
        orderBy: ['lastUpdate', 'desc'],
        where: [['authorId', '==', props.auth.uid]]
      }
    ];
  })
)(Home);
