import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SideNav({ profile }) {
  useEffect(() => {
    var elems = document.querySelector('.sidenav');
    // eslint-disable-next-line no-undef
    M.Sidenav.init(elems);
  }, []);

  return (
    <ul id="slide-out" className="sidenav">
      <li>
        <img className="sidenav-image" src={profile.image} alt="sidenav-image" />
      </li>
      <li>
        <p className="sidenav-name">{profile.name}</p>
      </li>
      <div className="divider" />
      <li className="folders">
        <li>
          <Link to="/dashboard">
            <i className="material-icons">assignment</i>
            All
          </Link>
        </li>
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
      </li>
    </ul>
  );
}

SideNav.propTypes = {
  profile: PropTypes.object.isRequired
};
