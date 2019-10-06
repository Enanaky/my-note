import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import User from './User';
// import logo from '../src/logo.png';
function Navbar({ formOn, view, changeView }) {
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
            <img className="lobo" src="./media/lago.png" alt="logo" />
          </Link>
        </div>
        <div className="nav-buttons">
          <a className="button-icon tooltip">
            <i className="large material-icons" onClick={() => formOn()}>
              add
            </i>
            <p
              className="tooltiptext"
              style={{
                backgroundColor: '#7b7a7a',
                color: 'white',
                width: '99px',
                height: '28px',
                textAlign: 'center',
                margin: '0px',
                font: '-webkit-small-control',
                fontSize: '15px',
                top: '47px'
              }}
            >
              Create a note
            </p>
          </a>
          <a onClick={() => changeView()} className="a-icon view tooltip">
            {view.grid === true ? (
              <i className="large material-icons list">view_stream</i>
            ) : (
              <i className="large material-icons grid">view_module</i>
            )}
            <p
              className="tooltiptext"
              style={{
                backgroundColor: '#7b7a7a',
                color: 'white',
                width: '99px',
                height: '28px',
                textAlign: 'center',
                margin: '0px',
                font: '-webkit-small-control',
                fontSize: '15px',
                top: '47px'
              }}
            >
              Change view
            </p>
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
