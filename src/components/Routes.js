import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import NoteList from './NoteList';
import NewNote from './NewNote';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/note/:id" component={NewNote} />
      <Route path="/notes" component={NoteList} />
    </Switch>
  );
}
