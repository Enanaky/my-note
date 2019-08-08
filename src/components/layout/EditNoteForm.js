import React from 'react';
import PropTypes from 'prop-types';

export default function EditNoteForm(props) {
  const { title, content } = props.note;

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
        />
        <label htmlFor="title active" className="active">
          Title
        </label>
      </div>
      <div className="row input-field content-input">
        <textarea
          id="content"
          className="materialize-textarea"
          name="content"
          onChange={props.handleChange}
          required
          data-length="2500"
          maxLength="2500"
          key={content}
          defaultValue={content}
        />
        <label htmlFor="textarea" className="active">
          Content
        </label>
      </div>
      <div className="save-input-button">
        <button type="submit" className="btn pink waves-effect waves-light save-input">
          Save
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
