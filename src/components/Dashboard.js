import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import NewNote from './NewNote';
import MiniNote from './MiniNote';

function Dashboard({ notes }) {
  const [note, setNote] = useState();

  function handleClick(id) {
    notes.forEach(note => {
      if (note.id === id) {
        setNote({ note });
      }
    });
  }

  return (
    <div className="dashboard">
      <NewNote note={note} />
      <ul className="note-list" data-isotope='{ "itemSelector": ".note", "layoutMode": "masonry" }'>
        {notes &&
          notes.map(note => {
            return <MiniNote note={note} key={note.id} handleClick={handleClick} />;
          })}
      </ul>
    </div>
  );
}

Dashboard.propTypes = {
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  console.log('state', state);

  return {
    notes: state.firestore.ordered.notes
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'notes' }])
)(Dashboard);
