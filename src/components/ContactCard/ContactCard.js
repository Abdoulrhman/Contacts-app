import React from 'react';
import classes from './ConatctCard.module.css'

const ContactCard = ()=>{
    return (<div className="card" style={{width: "18rem"}}>
    <div className={`card-header ${classes.Header}`}>
      Featured
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>)

}

export default ContactCard;