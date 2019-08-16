import React from 'react';
import PropTypes from 'prop-types';

export default function MiniNote(props) {
  const { title, content, id } = props.note;

  return (
    <div className="note" key={title} onClick={() => props.newNoteOn(id)}>
      <div className="note-inner">
        <p className="note-title">{title}</p>
        <p className="note-content">{content}</p>
      </div>
    </div>
  );
}

MiniNote.propTypes = {
  note: PropTypes.object.isRequired,
  newNoteOn: PropTypes.func.isRequired
};
