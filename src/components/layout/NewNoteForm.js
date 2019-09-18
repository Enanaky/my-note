import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import Colors from '../Colors';

export default function NewNoteForm({ handleSubmit, handleChange, formOff }) {
  const node = useRef();

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
    // props.formOff();
  }
  function handleClose(e) {
    e.preventDefault();
    formOff();
  }
  return (
    <form className="new-note-form" onSubmit={handleSubmit} ref={node}>
      <div>
        <div className="row input-field title-input">
          <textarea
            id="title-note"
            className="materialize-textarea"
            name="title"
            onChange={handleChange}
            required
            data-length="50"
            maxLength="50"
            defaultValue=""
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="row input-field content-input">
          <textarea
            id="content"
            className="materialize-textarea"
            name="content"
            onChange={handleChange}
            required
            data-length="2500"
            maxLength="2500"
            defaultValue=""
          />
          <label htmlFor="textarea">Content</label>
        </div>
      </div>
      <div className="save-input-button">
        <div className="tools-save-container">
          <div className="tools">{/* <Colors /> */}</div>
          <div className="form-buttons">
            <button type="submit" className="save-input">
              Save
            </button>
            <button className="save-input" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
NewNoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formOff: PropTypes.func.isRequired
};
