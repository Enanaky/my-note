import React from 'react';
import PropTypes from 'prop-types';

import MiniNote from '../MiniNote';

export default function NoteList(props) {
  const { notes, newNoteOn } = props;
  return (
    <ul className="note-list" data-isotope='{ "itemSelector": ".note", "layoutMode": "masonry" }'>
      {notes &&
        notes.map(note => {
          return <MiniNote note={note} key={note.id} newNoteOn={newNoteOn} />;
        })}
    </ul>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array,
  newNoteOn: PropTypes.func.isRequired
};
