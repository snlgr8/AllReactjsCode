import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { BookRoom } from './rooms/BookRoom';
import { AddRoom } from './rooms/AddRoom';
import { Home } from './Home';
import NoMatch from './NoMatch';
export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Home}></Route>
          <Route path='/addRoom' component={AddRoom}></Route>
          <Route path='/bookRoom' exact component={BookRoom}></Route>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
