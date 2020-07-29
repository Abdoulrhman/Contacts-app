import React, { useState, useEffect } from 'react';
import classes from './ViewContact.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getSinlgeContact } from '../../reducers/actions';
import { useLocation, useHistory } from 'react-router';


import Header from '../../components/Header/Header';






const ViewContact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const singleContact = useSelector((state) => state.singleContact)
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split('/viewContact/')[1];



  useEffect(() => {
    dispatch(getSinlgeContact(id));
  }, [])

  useEffect(() => {

    if (singleContact && singleContact.id) {
      setFormData(singleContact)
    }
  }, [])

  return (
    <div className="container">
      <Header />
      <h3 className="text-center">{`${singleContact ? singleContact.name : "User"}'s Profile`}</h3>

      <div class="row">
        <div class="col-md-6 offset-md-3">

          <ul class=" list-group-flush">
            <li class="list-group-item">{`Name: ${singleContact && singleContact.name}`}</li>
            <li class="list-group-item">{`Email: ${singleContact && singleContact.email}`}</li>
            <li class="list-group-item">{`Phone: ${singleContact && singleContact.phone}`}</li>

          </ul>
          <div className="row">
            <div class="col-md-6 offset-md-3">
              <button type="submit" className={classes.addBtn} onClick={() => {
                dispatch(deleteContact(id));
                history.push('/');

              }}>Delete</button>
              <button type="submit" className={classes.addBtn} onClick={() => {

                history.push(`/updateContact/${id}`)

              }}>Edit</button>


            </div>
          </div>
        </div>
      </div>




    </div>



  )

}

export default ViewContact;