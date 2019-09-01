import React from 'react';
import PropTypes from 'prop-types';

export default function MiniNote(props) {
  const { title, content, id } = props.note;

  function getHeight() {
    let intro = 0;
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '\n' || content[i] === '\r') {
        intro++;
      }
    }
    const base = 45;
    return base + Math.floor(content.length / 63 + intro) * 18;
  }

  const container = `note-${props.view}`;
  const inner = `note-inner-${props.view}`;
  const classTitle = `note-title-${props.view}`;
  const classContent = `note-content-${props.view}`;

  return (
    <div className={container} key={title} onClick={() => props.formOn(id)}>
      <div className={inner}>
        <p className={classTitle}>{title}</p>
        <textarea
          className={classContent}
          value={content}
          readOnly
          disabled
          style={{ height: `${getHeight()}px` }}
        />
      </div>
    </div>
  );
}

MiniNote.propTypes = {
  note: PropTypes.object.isRequired,
  formOn: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired
};
