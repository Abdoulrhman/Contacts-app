import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import classes from './Header.module.css';
import logo from '../../assets/images/logo/logo.svg'
import { Link } from "react-router-dom";

const Header = ({ contactFilterOnChange, inputValue }) => {


  return (
    <>
      <div className="container mt-5">
        <nav className="navbar navbar-light">
          <div className={classes.Logo}>
            <Link to="/"><img src={logo} alt="Logo Image" /></Link>
          </div>
          <form className="form-inline d-sm-block	d-none">
            <SearchBar contactFilterOnChange={contactFilterOnChange} inputValue={inputValue} />
          </form>
        </nav>
      </div>


    </>
  );
};

export default Header;
