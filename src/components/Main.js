import React, { useState } from 'react';

import SideNav from './menu/SideNav';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function Main() {
  const [view, setView] = useState({
    grid: true,
    darkMode: false
  });

  function handleSearch(input) {
    console.log(input);
  }

  //CHANGE THE VIEW MODEL GRID vs LIST
  function changeView() {
    if (view.grid === true) {
      setView({ ...view, grid: false });
      document.querySelector('.view-grid').classList.add('disabled');
      document.querySelector('.view-list').classList.remove('disabled');
    }
    if (view.grid === false) {
      setView({ ...view, grid: true });
      document.querySelector('.view-grid').classList.remove('disabled');
      document.querySelector('.view-list').classList.add('disabled');
    }
  }
  //CHANGE THE DARKMODE
  function changeMode() {
    if (view.darkMode === false) {
      setView({ ...view, darkMode: true });
      document.querySelector('.view-icon').classList.remove('dark');
    }
    if (view.darkMode === true) {
      setView({ ...view, darkMode: false });
      document.querySelector('.view-icon').classList.add('dark');
    }
  }

  return (
    <div className="main">
      <Navbar handleSearch={handleSearch} changeView={changeView} changeMode={changeMode} />
      <SideNav />
      <Footer />
    </div>
  );
}

export default Main;
