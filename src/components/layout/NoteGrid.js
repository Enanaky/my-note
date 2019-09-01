import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';

import MiniNote from './MiniNote';

export default function NoteGrid({ notes, formOn }) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  window.addEventListener('resize', displayWindowSize);

  function displayWindowSize() {
    // Get width of the window excluding scrollbars
    setWidth(document.documentElement.clientWidth);
  }

  function renderNotes(col) {
    const column = col.map(note => {
      return <MiniNote note={note} key={note.id} formOn={formOn} view="grid" />;
    });
    return column;
  }

  if (notes && width < 781) {
    let col1 = [],
      col2 = [];

    let counter = 1;
    notes.forEach(note => {
      if (`col${counter}` === 'col1') {
        col1.push(note);
      } else {
        col2.push(note);
      }

      if (counter < 2) {
        counter++;
      } else {
        counter = 1;
      }
    });

    return (
      <div className="notes-container">
        <ul className="note-column">{renderNotes(col1)}</ul>
        <ul className="note-column">{renderNotes(col2)}</ul>
      </div>
    );
  }
  if (notes && width < 1051) {
    let col1 = [],
      col2 = [],
      col3 = [];

    let counter = 1;
    notes.forEach(note => {
      if (`col${counter}` === 'col1') {
        col1.push(note);
      } else {
        if (`col${counter}` === 'col2') {
          col2.push(note);
        } else {
          col3.push(note);
        }
      }

      if (counter < 3) {
        counter++;
      } else {
        counter = 1;
      }
    });

    return (
      <div className="notes-container">
        <ul className="note-column">{renderNotes(col1)}</ul>
        <ul className="note-column">{renderNotes(col2)}</ul>
        <ul className="note-column">{renderNotes(col3)}</ul>
      </div>
    );
  }
  if (notes && width > 1050) {
    let col1 = [],
      col2 = [],
      col3 = [],
      col4 = [];

    let counter = 1;
    notes.forEach(note => {
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
        case 'col4':
          col4.push(note);
          break;
      }
      if (counter < 4) {
        counter++;
      } else {
        counter = 1;
      }
    });

    return (
      <div className="notes-container">
        <ul className="note-column">{renderNotes(col1)}</ul>
        <ul className="note-column">{renderNotes(col2)}</ul>
        <ul className="note-column">{renderNotes(col3)}</ul>
        <ul className="note-column">{renderNotes(col4)}</ul>
      </div>
    );
  } else {
    return null;
  }
}

NoteGrid.propTypes = {
  notes: PropTypes.array,
  formOn: PropTypes.func.isRequired
};

// function renderNotes(col) {
//   const column = col.map(note => {
//     return <MiniNote note={note} key={note.id} formOn={formOn} />;
//   });
//   return column;
// }
// if (notes) {
//     let sortedNotes = notes.sort((n1, n2) => {
//       let a = moment(n1.lastUpdate.toDate());
//       let b = moment(n2.lastUpdate.toDate());
//       if (a > b) return -1;
//       if (a < b) return 1;
//       return 0;
//     });
//     setSorted(sortedNotes);
//   }
