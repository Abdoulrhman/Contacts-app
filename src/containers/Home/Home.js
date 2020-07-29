import React, { useState, useEffect } from "react";
import classes from './Home.module.css'
import ContactCard from "../../components/ContactCard/ContactCard";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";


const Home = (props) => {
  const { history } = props
  const [allcontacts, setAllContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([])
  const [inputValue, setInputValue] = useState('');
  const renderdLetters = ["A", "C", "F", "K", "N", "T"];



  useEffect(() => {
    setAllContacts(props.stateContacts)
    setFilteredContacts(props.stateContacts)
  }, [props.stateContacts])

  const contactFilterOnChange = (e) => {
    console.log("Hi from filter ", e.target.value);
    setInputValue(e.target.value);
    if (e.target.value) {
      const searchFilter = filteredContacts.filter((contact) => {
        return contact.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setFilteredContacts(searchFilter);
    } else {
      setFilteredContacts(allcontacts);
    }

  }


  const filterByLetter = (letter) => {
    setFilteredContacts(allcontacts)

    let newArray = []
    newArray = filteredContacts.filter(contact => {
      return contact.name.toLowerCase().charAt(0) == letter.toLowerCase()
    })

    setFilteredContacts(newArray);

  }

  const handleAddContact = () => {
    history.push('/newContact')

  }



  return (
    <div className="container">
      <Header contactFilterOnChange={contactFilterOnChange} inputValue={inputValue} />
      <div className={`text-center ${classes.Header}`}>
        <h3>Contacts</h3>
        <span className={classes.redLine}>.</span>

        <div>
          {renderdLetters.map(letter => {
            return (<span className={classes.SpanLetter} onClick={() => filterByLetter(letter)}>{letter}</span>)
          })}
        </div>





        <div className="row">

          {filteredContacts.map(contact => {
            return (
              <div className="col-lg-4 col-md-12">
                <ContactCard contact={contact} />
              </div>)
          })}

        </div>

        <button className={classes.AddButton} onClick={handleAddContact}>+</button>









      </div>
    </div>



  );
};

function mapStateToProps(state) {
  return {
    stateContacts: state.contacts
  }
}

export default connect(mapStateToProps)(withRouter(Home));
