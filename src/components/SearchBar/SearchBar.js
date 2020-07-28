import React, { useState } from "react";

const SearchBar = (props) => {
  return (
      <>

      <label htmlFor="search"> Search by name </label>
      <input
        className={`form-control mr-sm-2`}
        type="text"
        placeholder="Search for contact"
        value={props.inputValue}
        onChange={props.contactFilterOnChange}
      />
 

    </>
  );
};

export default SearchBar;
