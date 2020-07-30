import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import ContactCard from "../../components/ContactCard/ContactCard";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import Header from "../../components/Header/Header";


const Home = (props) => {
  const [allcontacts, setAllContacts] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const renderdLetters = ["A", "C", "F", "K", "N", "T"];

  useEffect(() => {
    setAllContacts(props.stateContacts);
    setFilteredContacts(props.stateContacts);
  }, [props.stateContacts]);

  const contactFilterOnChange = (e) => {
    let value = e.target.value;
    setInputValue(value);
    if (value) {
      const searchFilter = filteredContacts.filter((contact) => {
        return contact.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredContacts(searchFilter);
    } else {
      setFilteredContacts(allcontacts);
    }
  };

  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
    setFilteredContacts(allcontacts);

    let newArray = [];
    newArray = allcontacts.filter((contact) => {
      return contact.name.toLowerCase().charAt(0) == letter.toLowerCase();
    });

    setFilteredContacts(newArray);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header
        contactFilterOnChange={contactFilterOnChange}
        inputValue={inputValue}
      />
      <div className="container">
        <div className={`text-center ${classes.Header}`}>
          <h3 className={classes.mainTitle}>Contacts</h3>

          <div className={classes.spanContainer}>
            {renderdLetters.map((letter) => {
              return (
                <span
                  className={`${classes.SpanLetter} ${
                    selectedLetter == letter ? classes.Active : ""
                  }`}
                  onClick={() => filterByLetter(letter)}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="row">
            {filteredContacts.map((contact) => {
              return (
                <div className="col-sm-12 col-md-4">
                  <ContactCard contact={contact} />
                </div>
              );
            })}
          </div>
        </div>
        <div class="container"></div>
      </div>
    </motion.div>
  );
};

function mapStateToProps(state) {
  return {
    stateContacts: state.contacts,
  };
}

export default connect(mapStateToProps)(withRouter(Home));
