import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import NewNote from './NewNote';
import MiniNote from './MiniNote';

function Dashboard({ notes }) {
  return (
    <div className="dashboard">
      <NewNote />
      <ul className="note-list" data-isotope='{ "itemSelector": ".note", "layoutMode": "masonry" }'>
        {notes &&
          notes.map(note => {
            return <MiniNote note={note} key={note.title} />;
          })}
      </ul>
    </div>
  );
}

Dashboard.propTypes = {
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  console.log(state);

  return {
    notes: state.firestore.ordered.notes
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'notes' }])
)(Dashboard);
