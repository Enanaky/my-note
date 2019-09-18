import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import User from './User';
// import logo from '../src/logo.png';
function Navbar({ formOn, view, changeView }) {
  const changeMode = () => {};

  return (
    <>
      <nav className="nav-wrapper">
        <div className="menu-search">
          <a href="#" className="sidenav-trigger" data-target="slide-out">
            <i className="large material-icons menu-icon">menu</i>
          </a>
        </div>
        <div className="logo">
          <Link to="/dashboard" className="logo">
            <img className="logo" src="../src/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="nav-buttons">
          <a className="button-icon">
            <i className="large material-icons" onClick={() => formOn()}>
              add
            </i>
          </a>
          <a onClick={() => changeView()} className="a-icon view">
            {view.grid === true ? (
              <i className="large material-icons list">view_stream</i>
            ) : (
              <i className="large material-icons grid">view_module</i>
            )}
          </a>
          <User />
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  formOn: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  view: PropTypes.object.isRequired
};

export default Navbar;
