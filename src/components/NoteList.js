import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function NoteList(props) {
  return (
    <div className="list-container">
      <h3>Notes</h3>
      <ul className="notes-list">
        {props.notes.map(note => {
          return (
            <div key={note.title}>
              <li className="note-title">{note.title}</li>
              <li className="note-content">{note.content}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(NoteList);
