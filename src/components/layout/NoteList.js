import React from 'react';
import PropTypes from 'prop-types';

import MiniNote from '../MiniNote';

export default function NoteList(props) {
  const { notes, handleClick } = props;
  return (
    <ul className="note-list" data-isotope='{ "itemSelector": ".note", "layoutMode": "masonry" }'>
      {notes &&
        notes.map(note => {
          return <MiniNote note={note} key={note.id} handleClick={handleClick} />;
        })}
    </ul>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array,
  handleClick: PropTypes.func.isRequired
};
