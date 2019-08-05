import React from 'react';

import { ToastContainer } from 'react-toastify';

import Navbar from './layout/Navbar';
import SideNav from './layout/SideNav';
import Routes from './Routes';
import Footer from './layout/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <SideNav />
      <Routes />
      <Footer />
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}
