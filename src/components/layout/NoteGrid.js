import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import MiniNote from './MiniNote';

export default function NoteGrid({ notes, formOn }) {
  const [sorted, setSorted] = useState(null);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    if (notes) {
      let sortedNotes = notes.sort(function(n1, n2) {
        let a = moment(n1.lastUpdate.toDate());
        let b = moment(n2.lastUpdate.toDate());
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      });
      setSorted(sortedNotes);
    }
  }, [notes]);

  function displayWindowSize() {
    // Get width of the window excluding scrollbars
    setWidth(document.documentElement.clientWidth);
  }

  window.addEventListener('resize', displayWindowSize);

  function renderNotes(col) {
    const column = col.map(note => {
      return <MiniNote note={note} key={note.id} formOn={formOn} />;
    });
    return column;
  }

  if (sorted && width > 1050) {
    // let columns = 4;
    let col1 = [],
      col2 = [],
      col3 = [],
      col4 = [];

    let counter = 1;
    sorted.forEach(note => {
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

// return (
//   <div className="notes-container">
//     {sorted.map(note => {
//       return <MiniNote note={note} key={note.id} formOn={formOn} />;
//     })}
//   </div>
// );

// function organizeNotes(sorted, columns) {
//   let counter = 1;
//   sorted.forEach(note => {
//     setSchema({ ...schema, [`col${counter}`]: note });
//     counter < 4 ? counter++ : (counter = 1);
//   });
// }
