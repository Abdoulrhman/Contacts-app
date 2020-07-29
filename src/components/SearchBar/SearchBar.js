import React, { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({inputValue , contactFilterOnChange}) => {
  return (
      <>

      <input
        className={`form-control mr-sm-2 ${classes.Input}`}
        type="text"
        placeholder="Search for contact"
        value={inputValue}
        onChange={contactFilterOnChange}
      />
 

    </>
  );
};

export default SearchBar;
