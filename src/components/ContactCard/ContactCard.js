import React from 'react';
import classes from './ConatctCard.module.css'
import { useHistory } from 'react-router';


const ContactCard = ({contact}) => {
  const history = useHistory();

  return (

    <div className="card" style={{ width: "20rem", marginBottom: "15px" }} onClick={() => history.push(`/viewContact/${contact.id}`)}>
      <div className={`card-header ${classes.Header}`}>
        {contact.name}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={{ padding: "0px" }}>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </li>
      </ul>
    </div>)

}

export default ContactCard;