import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
