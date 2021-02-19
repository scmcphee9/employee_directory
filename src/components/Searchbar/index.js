import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Searchbar(props) {
  return (
    <form className="search">
      <input
        placeholder="Search Employee"
        // value={props.search}
        // onChange={props.handleInputChange}
        // name="breed"
        // list="breeds"
        // type="text"
        // className="form-control"
        // placeholder="Type in a dog breed to begin"
        // id="breed"
      />
    </form>
  );
}

export default Searchbar;
