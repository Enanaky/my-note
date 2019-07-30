import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as noteActions from "../redux/actions/noteActions";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

function Home(props) {
  const [note, setNote] = useState({
    type: null,
    id: null,
    title: null,
    content: null
  });

  function handleChange(event) {
    switch (event.target.name) {
      case "title":
        setNote({ ...note, title: event.target.value });
        break;
      case "content":
        setNote({ ...note, content: event.target.value });
        break;
      default:
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    debugger;
    props.dispatch(noteActions.createNote(note));
  }

  return (
    <div className="container">
      <Navbar />
      <Dashboard handleChange={handleChange} handleSubmit={handleSubmit} />
      <ul>
        {props.notes.map(note => (
          <li key={note.title}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  debugger;
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(Home);
