import React from 'react';
import './App.scss';

import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/Home/Home';
import NewContact from './containers/NewContact/NewContact';
import ViewContact from './containers/ViewContact/ViewContact';
import UpdateContact from './containers/UpdateContact/UpdateContact';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/newContact">
          <NewContact />
        </Route>
        <Route path="/updateContact/:id">
          <UpdateContact />
        </Route>
        <Route path="/viewContact/:id">
          <ViewContact />
        </Route>
      </Switch>
    </div>
  );
}

export default (App);
