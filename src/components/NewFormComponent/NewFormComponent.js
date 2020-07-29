import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getSinlgeContact, updateContact } from '../../reducers/actions';
import { useHistory, useRouteMatch, useLocation } from 'react-router';
import classes from './NewFormComponent.module.css';



const NewFormComponent = ({ buttonTitle, action }) => {

    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();
    const location = useLocation();
    const singleContact = useSelector((state) => state.singleContact);
    const id = location.pathname.split('/updateContact/')[1];


    useEffect(() => {
        if (action === "ADD") {
            setFormData({})
        }

        dispatch(getSinlgeContact(id));
    }, [])

    useEffect(() => {

        if (singleContact && singleContact.id) {
            setFormData(singleContact)
        }
    }, [singleContact])
    return (

        <div class="row">
            <div class="col-md-6 offset-md-3">
                <form>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={formData.email} aria-describedby="emailHelp" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail2">Phone Number</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" value={formData.phone} aria-describedby="emailHelp" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>

                    <div className="row">
                        <div class="col-md-2 offset-md-5">
                            <button type="submit" className={classes.addBtn} onClick={() => {
                                dispatch(action === "ADD" ? addContact(formData) : updateContact(formData));
                                history.push(`/`)
                            }}>{buttonTitle}</button>

                        </div>
                    </div>

                </form>

            </div>
        </div>


    )

}

export default NewFormComponent;