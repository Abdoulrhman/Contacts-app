import React, { useState } from 'react';
import classes from './UpdateContact.module.css'
import { useDispatch } from 'react-redux';
import NewFormComponent from '../../components/NewFormComponent/NewFormComponent';
import Header from '../../components/Header/Header';


const NewContact = () => {
  const dispatch = useDispatch();
 
  return (
    <div className="container">
      <Header />
      <h3 className="text-center">Update</h3>

      <NewFormComponent buttonTitle="Save Contact" action="UPDATE"  />
    </div>



  )

}

export default NewContact;