import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SideNav() {
  useEffect(() => {
    var elems = document.querySelector('.sidenav');
    // eslint-disable-next-line no-undef
    M.Sidenav.init(elems);
  }, []);

  return (
    <ul id="slide-out" className="sidenav">
      <li>
        <Link to="/notes">
          <i className="material-icons">assignment</i>
          Notes
        </Link>
      </li>
      <div className="divider" />
      <li>
        <Link to="/personal">
          <i className="material-icons">person_outline</i>
          Personal
        </Link>
      </li>
      <li>
        <Link to="/work">
          <i className="material-icons">work</i>
          Work
        </Link>
      </li>
      <li>
        <Link to="/inspiration">
          <i className="material-icons">brush</i>
          Inspiration
        </Link>
      </li>
      <li>
        <Link to="/trashbag">
          <i className="material-icons">delete</i>
          Trash
        </Link>
      </li>
    </ul>
  );
}
