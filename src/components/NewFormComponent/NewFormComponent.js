import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getSinlgeContact,
  updateContact,
} from "../../reducers/actions";
import { useHistory, useLocation } from "react-router";
import { v4 as uuidv4 } from "uuid";

import classes from "./NewFormComponent.module.css";

const NewFormComponent = ({ buttonTitle, action }) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const singleContact = useSelector((state) => state.singleContact);
  const id = location.pathname.split("/updateContact/")[1];



  useEffect(() => {
    
    if (action == "ADD") {
      setFormData({});
    }
    dispatch(getSinlgeContact(id));
  }, []);

  useEffect(() => {
    if (singleContact && singleContact.name && location.pathname !== '/newContact')  {
      setFormData(singleContact);
    }
  }, [singleContact]);
  return (
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form>
          {action === "ADD" && (
            <div className="form-group">
              <label for="Id">ID</label>
              <input
                type="number"
                id="Id"
                className="form-control"
                value={formData.id ? formData.id : uuidv4()}
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
              />
            </div>
          )}
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="row">
            <div class="col-sm-2 offset-sm-5">
              <button
                type="submit"
                className={classes.addBtn}
                onClick={() => {
                  dispatch(
                    action === "ADD"
                      ? addContact(formData)
                      : updateContact(formData)
                  );
                  history.push(`/`);
                }}
              >
                {buttonTitle}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFormComponent;
