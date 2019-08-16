import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import MiniNote from './MiniNote';

export default function NoteGrid(props) {
  // const { notes, newNoteOn } = props;

  let col1 = [],
    col2 = [],
    col3 = [];

  if (props.notes) {
    let sortedNotes = props.notes.sort(function(n1, n2) {
      let a = moment(n1.lastUpdate.toDate());
      let b = moment(n2.lastUpdate.toDate());
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    let counter = 1;
    sortedNotes.forEach(note => {
      switch (`col${counter}`) {
        case 'col1':
          col1.push(note);
          break;
        case 'col2':
          col2.push(note);
          break;
        case 'col3':
          col3.push(note);
          break;
      }
      if (counter < 3) {
        counter++;
      } else {
        counter = 1;
      }
    });
  }
  console.log(col1, col2, col3);
  function renderNotes(col) {
    col && console.log(col);

    const column = col.map(note => {
      return <MiniNote note={note} key={note.id} newNoteOn={props.newNoteOn} />;
    });
    return column;
  }

  return (
    <div className="notes-container">
      <ul className="note-column">{renderNotes(col1)}</ul>
      <ul className="note-column">{renderNotes(col2)}</ul>
      <ul className="note-column">{renderNotes(col3)}</ul>
    </div>
  );
}

NoteGrid.propTypes = {
  notes: PropTypes.array,
  newNoteOn: PropTypes.func.isRequired
};
