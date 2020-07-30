import React from 'react';
import './App.scss';

import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from './containers/Home/Home';
import NewContact from './containers/NewContact/NewContact';
import ViewContact from './containers/ViewContact/ViewContact';
import UpdateContact from './containers/UpdateContact/UpdateContact';




function App() {
  const history = useHistory();

  const handleAddContact = () => {
    history.push('/newContact')

  }

  
  return (
    <div>
              <button className="AddButton" onClick={handleAddContact}>+</button>

     
       <AnimatePresence >
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
      </AnimatePresence>

      <div className="footer text-center mt-5">
        
       
         <p>All Rights Reserved. VSSB {new Date().getFullYear()}</p>
      
    
    </div>
      
    </div>
  );
}

export default (App);
