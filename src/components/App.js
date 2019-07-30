import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./Login";
import Home from "./Home";

export default function App() {
  return (
    <div className="container-app">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}
