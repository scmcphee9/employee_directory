import React, { useEffect, useState } from "react";
import "./style.css";
import employeeState from "../SearchResults/index";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Searchbar() {
  return (
    <form className="search">
      <input type="text" placeholder="Search Employee" />
    </form>
  );
}

export default Searchbar;
