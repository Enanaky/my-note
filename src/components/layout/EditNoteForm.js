import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function EditNoteForm(props) {
  const { title, content, lastUpdate, id } = props.note;
  const node = useRef();
  console.log(node);

  useEffect(() => {
    const counter = document.querySelectorAll('textarea#title-note,textarea#content');
    // eslint-disable-next-line no-undef
    M.CharacterCounter.init(counter);
  }, []);

  useEffect(() => {
    document.addEventListener('click', closePanel);
    return () => {
      document.removeEventListener('click', closePanel);
    };
  }, []);

  function closePanel(e) {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    props.newNoteOff();
  }

  function handleClick(e) {
    e.preventDefault();
    props.newNoteOff();
    console.log(id);
    props.deleteNote(id);
  }

  return (
    <form className="new-note-form" onSubmit={props.handleSubmit} ref={node}>
      <div className="row input-field title-input">
        <textarea
          id="title-note"
          className="materialize-textarea"
          name="title"
          onChange={props.handleChange}
          required
          data-length="50"
          maxLength="50"
          key={title}
          defaultValue={title}
          autoFocus
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
          onChange={props.handleChange}
          required
          data-length="2500"
          maxLength="2500"
          key={content}
          defaultValue={content}
          rows="15"
        />
        <label htmlFor="textarea" className="active">
          Content
        </label>
      </div>
      <div className="tools-container">
        <div className="tools">
          <i className="material-icons tool-icon" onClick={handleClick}>
            delete
          </i>
          <i className="material-icons tool-icon">color_lens</i>
        </div>
        <p className="last-update grey-text flex-end">
          Last update: {moment(lastUpdate.toDate()).calendar()}
        </p>
      </div>
      <div className="save-input-button">
        <button type="submit" className="save-input">
          Cerrar
        </button>
      </div>
    </form>
  );
}
EditNoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  newNoteOff: PropTypes.func.isRequired
};
