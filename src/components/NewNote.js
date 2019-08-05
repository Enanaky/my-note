import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as noteActions from '../redux/actions/noteActions';
import PropTypes from 'prop-types';

function NewNote(props) {
  const [note, setNote] = useState({
    type: null,
    id: null,
    title: null,
    content: null
  });

  function handleChange(event) {
    switch (event.target.name) {
      case 'title':
        setNote({ ...note, title: event.target.value });
        break;
      case 'content':
        setNote({ ...note, content: event.target.value });
        break;
      default:
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.dispatch(noteActions.createNote(note));
  }

  return (
    <div className="new-note">
      <form className="new-note-form" onSubmit={handleSubmit}>
        <div className="row input-field title-input">
          <textarea
            id="title-note"
            className="materialize-textarea"
            name="title"
            onChange={handleChange}
            required
            data-length="50"
            maxLength="50"
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
          />
          <label htmlFor="textarea">Content</label>
        </div>
        <div className="save-input-button">
          <button type="submit" className="btn pink waves-effect waves-light save-input">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

NewNote.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NewNote);
