import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';

import MiniNote from './MiniNote';

export default function NoteGrid(props) {
  useEffect(() => {
    masonryLayout(
      document.querySelector('.notes-container'),
      document.querySelectorAll('.note'),
      3
    );
  });

  function masonryLayout(container, items, columns) {
    if (props.notes) {
      if (container) {
        container.classList.add('masonry-layout', `columns-${columns}`);
        let columnsElements = [];
        //Creating the columns...
        for (let i = 1; i <= columns; i++) {
          let column = document.createElement('div');
          column.classList.add('masonry-column', `column-${i}`);
          container.appendChild(column);
          columnsElements.push(column);
        }
        //inserting items inside the columns...
        for (let m = 0; m < Math.ceil(items.length / columns); m++) {
          for (let n = 0; n < columns; n++) {
            let item = items[m * columns + n];
            if (item) {
              columnsElements[n].appendChild(item);
              item.classList.add('masonry-item');
            }
          }
        }
      }
    }
  }

  console.log('rendering');
  if (props.notes) {
    return (
      <div className="notes-container">
        {props.notes.map(note => {
          return <MiniNote note={note} key={note.id} newNoteOn={props.newNoteOn} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}

NoteGrid.propTypes = {
  notes: PropTypes.array,
  newNoteOn: PropTypes.func.isRequired
};

// let sortedNotes = props.notes.sort(function(n1, n2) {
//   let a = moment(n1.lastUpdate.toDate());
//   let b = moment(n2.lastUpdate.toDate());
//   if (a > b) return -1;
//   if (a < b) return 1;
//   return 0;
// });
