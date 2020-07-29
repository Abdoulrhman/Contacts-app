import React, { useState } from 'react';
import classes from './NewContact.module.css'
import { useDispatch } from 'react-redux';
import NewFormComponent from '../../components/NewFormComponent/NewFormComponent';
import Header from '../../components/Header/Header';


const NewContact = (props) => {
  const dispatch = useDispatch();
 
  return (
    <div className="container">
      <Header />
      <h3 className="text-center">Add New Contact</h3>

      <NewFormComponent buttonTitle="Add Contact" action="ADD"  />
    </div>



  )

}

export default NewContact;