import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function EditNoteForm(props) {
  const { title, content, lastUpdate } = props.note;

  useEffect(() => {
    const counter = document.querySelectorAll('textarea#title-note,textarea#content');
    // eslint-disable-next-line no-undef
    M.CharacterCounter.init(counter);
  }, []);

  return (
    <form className="new-note-form" onSubmit={props.handleSubmit}>
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
      <p className="last-update grey-text flex-end">
        Last update: {moment(lastUpdate.toDate()).calendar()}
      </p>
      <div className="save-input-button">
        <button type="submit" className="btn pink waves-effect waves-light save-input">
          Save
        </button>
        <button type="delete" className="btn red waves-effect waves-light delete-input">
          Delete
        </button>
      </div>
    </form>
  );
}
EditNoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired
};
