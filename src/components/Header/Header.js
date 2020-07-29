import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import classes from './Header.module.css';
import logo from '../../assets/logo/logo.svg'
import { Link } from "react-router-dom";

const Header = ({ contactFilterOnChange, inputValue }) => {


  return (
    <>
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-6 col-xs-12" >
            <div className={classes.Logo}>
              <Link to="/"><img src={logo} alt="Logo Image" /></Link>

            </div>



          </div>
          <div className="col-md-6 col-xs-12">

            <form className="form-inline">
              <SearchBar contactFilterOnChange={contactFilterOnChange} inputValue={inputValue} />
            </form>
          </div>
        </div>


      </div>


    </>
  );
};

export default Header;
