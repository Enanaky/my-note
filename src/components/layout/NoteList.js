import React from 'react';
import PropTypes from 'prop-types';

import MiniNote from './MiniNote';

export default function NoteList({ notes, formOn }) {
  return (
    <div className="notes-container">
      <ul className="note-list-ul">
        {notes &&
          notes.map(note => {
            return <MiniNote note={note} key={note.id} formOn={formOn} view="list" />;
          })}
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array,
  formOn: PropTypes.func.isRequired
};
