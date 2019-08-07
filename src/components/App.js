import React from 'react';

import { ToastContainer } from 'react-toastify';

import Navbar from './layout/Navbar';
import SideNav from './layout/SideNav';
import Routes from './Routes';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <SideNav />
      <Routes />
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}
