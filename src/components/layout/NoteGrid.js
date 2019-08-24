import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import MiniNote from './MiniNote';

export default function NoteGrid({ notes, formOn }) {
  const [sorted, setSorted] = useState(null);
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
  // console.log('sorted');
  if (sorted) {
    return (
      <div className="notes-container">
        {sorted.map(note => {
          return <MiniNote note={note} key={note.id} formOn={formOn} />;
        })}
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
