import React from "react";
import { connect } from "react-redux";
// import PropTypes from ''

export default function Dashboard(props) {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit}>
        <h2>Add new note</h2>
        <input
          type="text"
          name="title"
          onChange={props.handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="content"
          onChange={props.handleChange}
          placeholder="description"
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
