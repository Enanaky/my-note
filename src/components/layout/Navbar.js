import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  //SEARCH HANDLER---
  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch(document.getElementById('search').value);
    document.getElementById('search').value = '';
  }
  function xButton() {
    document.getElementById('search').value = '';
  }

  return (
    <>
      <nav className="nav-wrapper">
        <div className="menu-search">
          <a href="#" className="sidenav-trigger" data-target="slide-out">
            <i className="large material-icons menu-icon">menu</i>
          </a>
          <div className="input-field search-bar">
            <form className="search-bar" onSubmit={handleSubmit}>
              <i className="large material-icons menu-icon">search</i>
              <input id="search" type="search" required />
              <i className="material-icons" onClick={xButton}>
                close
              </i>
            </form>
          </div>
        </div>
        <div className="logo">
          <Link to="/notes" className="logo">
            Logo
          </Link>
        </div>
        <div className="nav-buttons">
          <Link to="/note/new-note" className="button-icon">
            <i className="large material-icons">add</i>
          </Link>

          <a onClick={props.changeView} className="a-icon view-grid ">
            <i className="large material-icons view-grid">view_module</i>
          </a>

          <a onClick={props.changeView} className="a-icon view-list disabled">
            <i className="large material-icons">view_stream</i>
          </a>

          <a onClick={props.changeMode} className="mode-icon">
            <i className="large material-icons view-icon dark">visibility</i>
          </a>
          <a href="/" className="a-icon">
            <i className="large material-icons">person</i>
          </a>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired
};
