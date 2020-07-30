import React, { useState } from "react";
import classes from "./NewContact.module.css";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";

import NewFormComponent from "../../components/NewFormComponent/NewFormComponent";

const NewContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <Header />
        <h3 className={`text-center ${classes.mainTitle}`}>Add New Contact</h3>

        <NewFormComponent buttonTitle="Add Contact" action="ADD" />
      </div>
    </motion.div>
  );
};

export default NewContact;
