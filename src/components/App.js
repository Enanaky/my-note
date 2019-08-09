import React from 'react';

import { ToastContainer } from 'react-toastify';

import Routes from './Routes';

export default function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}
