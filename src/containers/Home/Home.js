import React , {useState, useEffect} from "react";
import classes from './Home.module.css'
import ContactCard from "../../components/ContactCard/ContactCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = (props) => {
   


  return (
      <div className="container">
          <div className={`text-center ${classes.Header}`}>
              <h3>Contacts</h3>
              <span className={classes.SpanLetter}>A</span>
              <span className={classes.SpanLetter}>C</span>
              <span className={classes.SpanLetter}>F</span>
              <span className={classes.SpanLetter}>K</span>
              <span className={classes.SpanLetter}>N</span>
              <span className={classes.SpanLetter}>T</span>

              <ContactCard />
              <ul>
                  {props.contacts.map(contact =>{
                      return (<li>{contact.name}</li>)
                  })}
              </ul>




          </div>
      </div>
     
    
      
  );
};

export default Home;
