import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function SideNav({ profile, labelNotes }) {
  useEffect(() => {
    var elems = document.querySelector('.sidenav');
    // eslint-disable-next-line no-undef
    M.Sidenav.init(elems);
  }, []);

  return (
    <ul id="slide-out" className="sidenav">
      <li>
        {profile.image ? (
          <img className="sidenav-image" src={profile.image} alt="sidenav-image" />
        ) : (
          <div className="initials-container">
            <p className="big-initials">{profile.initials}</p>
          </div>
        )}
      </li>
      <li>
        {profile.image ? (
          <p className="sidenav-name">{profile.name}</p>
        ) : (
          <p className="sidenav-name">{profile.firstName + ' ' + profile.lastName}</p>
        )}
      </li>
      <div className="divider" />
      <ul className="folders">
        <li>
          <a onClick={() => labelNotes('All')}>
            <i className="material-icons">assignment</i>
            All
          </a>
        </li>
        <li>
          <a onClick={() => labelNotes('Personal')}>
            <i className="material-icons">person_outline</i>
            Personal
          </a>
        </li>
        <li>
          <a onClick={() => labelNotes('Work')}>
            <i className="material-icons">work</i>
            Work
          </a>
        </li>
        <li>
          <a onClick={() => labelNotes('Inspiration')}>
            <i className="material-icons">brush</i>
            Inspiration
          </a>
        </li>
      </ul>
    </ul>
  );
}

SideNav.propTypes = {
  profile: PropTypes.object.isRequired,
  labelNotes: PropTypes.func.isRequired
};
