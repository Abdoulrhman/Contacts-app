import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import classes from "./UpdateContact.module.css";

import NewFormComponent from "../../components/NewFormComponent/NewFormComponent";

const UpdateContact = () => {
  const singleContact = useSelector((state) => state.singleContact);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <Header />
        <h3 className={`text-center ${classes.mainTitle}`}>{`${
          singleContact ? singleContact.name : "User"
        }'s Profile`}</h3>

        <NewFormComponent buttonTitle="Save Contact" action="UPDATE" />
      </div>
    </motion.div>
  );
};

export default UpdateContact;
