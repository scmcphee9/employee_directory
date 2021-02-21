import React, { useEffect, useState } from "react";
import "./style.css";
import employeeState from "../SearchResults/index";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Searchbar() {
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   if (!search) {
  //     return;
  //   }
  // });

  // function handleInputChange(event) {
  //   setSearch(event.target.value);
  //   console.log(event.target.value);
  // }
  // console.log("handleInputChange: ");
  // console.log(handleInputChange);

  // function handleInputChange(event) {
  //   setSearch(event.target.value);
  //   // console.log(event.target.value);
  // }
  // // const { image, name, phone, email, dob } = employeeState;
  // const filteredNames = employeeState.filter((name) => {
  //   return name.name.first.toLowerCase().includes(search.toLocaleLowerCase());
  // });

  return (
    <form className="search">
      <input type="text" placeholder="Search Employee" />
    </form>
  );
}

export default Searchbar;
