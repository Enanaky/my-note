import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Dashboard from './Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
