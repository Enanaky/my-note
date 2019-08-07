import React from 'react';
import PropTypes from 'prop-types';

export default function MiniNote(props) {
  const { title, content } = props.note;
  return (
    <div className="note" key={title}>
      <div className="note-inner">
        <li className="note-title">{title}</li>
        <li className="note-content">{content}</li>
      </div>
    </div>
  );
}

MiniNote.propTypes = {
  note: PropTypes.object.isRequired
};
