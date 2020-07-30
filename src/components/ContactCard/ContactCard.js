import React from 'react';
import classes from './ConatctCard.module.scss'
import { useHistory } from 'react-router';


const ContactCard = ({contact}) => {
  const history = useHistory();

  return (
    

    <div className={`card ${classes.Card}`} onClick={() => history.push(`/viewContact/${contact.id}`)}>
      <div className={`card-header ${classes.Header}`}>
        {contact.name}
      </div>
      <ul className="list-group list-group-flush">
        <li className={`list-group-item ${classes.SubTitle}`}>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </li>
      </ul>
    </div>)

}

export default ContactCard;