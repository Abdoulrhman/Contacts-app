import React, { useState, useEffect } from "react";
import classes from "./ViewContact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getSinlgeContact } from "../../reducers/actions";
import { useLocation, useHistory } from "react-router";
import { motion } from "framer-motion";

import Header from "../../components/Header/Header";

const ViewContact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const singleContact = useSelector((state) => state.singleContact);
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split("/viewContact/")[1];

  useEffect(() => {
    dispatch(getSinlgeContact(id));
  }, []);

  useEffect(() => {
    if (singleContact && singleContact.id) {
      setFormData(singleContact);
    }
  }, []);

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

        <div class="row">
          <div class="col-md-6 offset-md-3">
            <ul class=" list-group-flush" style={{ marginLeft: "85px" }}>
              <li className={`list-group-item ${classes.listItem}`}>{`Name: ${
                singleContact && singleContact.name
              }`}</li>
              <li
                className={`list-group-item ${classes.listItem}`}
                style={{ color: "red" }}
              >{`Email: ${singleContact && singleContact.email}`}</li>
              <li
                className={`list-group-item ${classes.listItem}`}
                style={{ color: "red" }}
              >{`Phone: ${singleContact && singleContact.phone}`}</li>
            </ul>
          </div>
        </div>

        <div className="row  text-center">
          <div class="col-md-6 offset-md-3">
            <button
              type="submit"
              className={classes.addBtn}
              style={{ borderColor: "red", color: "red" }}
              onClick={() => {
                dispatch(deleteContact(id));
                history.push("/");
              }}
            >
              Delete
            </button>
            <button
              type="submit"
              className={classes.addBtn}
              onClick={() => {
                history.push(`/updateContact/${id}`);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewContact;
