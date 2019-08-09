import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import User from './User';

class Navbar extends React.Component {
  state = {
    grid: true,
    darkMode: false
  };

  //SEARCH HANDLER---
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.handleSearch(document.getElementById('search').value);
  //   document.getElementById('search').value = '';
  // }
  // function xButton() {
  //   document.getElementById('search').value = '';
  // }

  //CHANGE THE VIEW MODEL GRID vs LIST
  changeView = () => {
    if (this.state.grid === true) {
      this.setState({ ...this.state, grid: false });
      document.querySelector('.view-grid').classList.add('disabled');
      document.querySelector('.view-list').classList.remove('disabled');
    }
    if (this.state.grid === false) {
      this.setState({ ...this.state, grid: true });
      document.querySelector('.view-grid').classList.remove('disabled');
      document.querySelector('.view-list').classList.add('disabled');
    }
  };

  //CHANGE THE DARKMODE
  changeMode = () => {
    if (this.state.darkMode === false) {
      this.setState({ ...this.state, darkMode: true });
      document.querySelector('.view-icon').classList.remove('dark');
    }
    if (this.state.darkMode === true) {
      this.setState({ ...this.state, darkMode: false });
      document.querySelector('.view-icon').classList.add('dark');
    }
  };
  render() {
    return (
      <>
        <nav className="nav-wrapper">
          <div className="menu-search">
            <a href="#" className="sidenav-trigger" data-target="slide-out">
              <i className="large material-icons menu-icon">menu</i>
            </a>
            <div className="input-field search-bar">
              <form className="search-bar">
                <i className="large material-icons menu-icon">search</i>
                <input id="search" type="search" required />
                <i className="material-icons">close</i>
              </form>
            </div>
          </div>
          <div className="logo">
            <Link to="/dashboard" className="logo">
              <img src="./src/logo.png" />
            </Link>
          </div>
          <div className="nav-buttons">
            <Link to="/note/new-note" className="button-icon">
              <i className="large material-icons">add</i>
            </Link>
            <a onClick={this.changeView} className="a-icon view-grid ">
              <i className="large material-icons view-grid">view_module</i>
            </a>
            <a onClick={this.changeView} className="a-icon view-list disabled">
              <i className="large material-icons">view_stream</i>
            </a>
            <a onClick={this.changeMode} className="mode-icon">
              <i className="large material-icons view-icon dark">visibility</i>
            </a>
            <User />
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
