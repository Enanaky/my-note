import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function EditNoteForm(props) {
  const { title, content, lastUpdate, id } = props.note;
  const node = useRef();

  useEffect(() => {
    const counter = document.querySelectorAll('textarea#title-note,textarea#content');
    // eslint-disable-next-line no-undef
    M.CharacterCounter.init(counter);
  }, []);

  useEffect(() => {
    document.addEventListener('click', clickLocation);
    return () => {
      document.removeEventListener('click', clickLocation);
    };
  }, []);

  async function clickLocation(e) {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    props.formOff();
  }

  function getHeight() {
    let intro = 0;
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '\n' || content[i] === '\r') {
        intro++;
      }
    }
    const base = 45;
    return base + Math.floor(content.length / 77 + intro) * 18;
  }

  return (
    <form className="new-note-form" onSubmit={props.handleSubmit} ref={node}>
      <div className="row input-field title-input">
        <textarea
          id="title-note"
          className="materialize-textarea"
          name="title"
          onChange={e => props.handleChange(e)}
          required
          data-length="50"
          maxLength="50"
          key={title}
          defaultValue={title}
        />
        <label htmlFor="title active" className="active">
          Title
        </label>
      </div>
      <div className="row input-field content-input">
        <textarea
          id="content"
          className="materialize-textarea content-textarea"
          name="content"
          onChange={e => props.handleChange(e)}
          required
          data-length="2500"
          maxLength="2500"
          key={content}
          defaultValue={content}
          style={{ height: `${getHeight()}px` }}
          autoFocus
        />
        <label htmlFor="textarea" className="active">
          Content
        </label>
      </div>
      <p className="last-update grey-text flex-end">
        Last update: {moment(lastUpdate.toDate()).calendar()}
      </p>
      <div className="tools-save-container">
        <div className="tools">
          <i className="material-icons tool-icon" onClick={() => props.handleDelete(id)}>
            delete
          </i>
          <i className="material-icons tool-icon">color_lens</i>
        </div>
        <button type="submit" className="save-input">
          Save
        </button>
      </div>
    </form>
  );
}
EditNoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  formOff: PropTypes.func.isRequired
};
