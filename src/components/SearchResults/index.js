import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import SearchBar from "../Searchbar/index";

function App() {
  const [employeeState, setEmployeeState] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        setEmployeeState(res.data.results);
        // console.log("Employee State:");
        // console.log(employeeState);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleInputChange(event) {
    setSearch(event.target.value);
    // console.log(event.target.value);
  }
  // const { image, name, phone, email, dob } = employeeState;
  const filteredNames = employeeState.filter((name) => {
    // console.log("phone:");
    // console.log(typeof name.phone);
    // console.log(typeof search);
    if (typeof search === "string") {
      return (
        name.name.first.toLowerCase().includes(search.toLowerCase()) ||
        name.phone.includes(search)
      );
    }
  });

  // console.log("filtered names: ");
  console.log(filteredNames);

  function sortFilteredNames() {
    const sortNames = employeeState.sort(function (a, b) {
      const nameA = a.name.first.toLowerCase();
      const nameB = b.name.first.toLowerCase();

      let comparison = 0;
      if (nameA < nameB) {
        comparison = -1;
        setOrder("desc");
      }
      if (nameA > nameB) {
        comparison = 1;
        setOrder("asc");
      }
      return comparison;
    });
    console.log(sortNames);
    if (order === "desc") {
      setEmployeeState([...sortNames].reverse());
    } else {
      setEmployeeState([...sortNames]);
    }
  }

  function setDate(result) {
    const date = new Date(result.dob.date);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return month + "-" + day + "-" + year;
  }
  // console.log("sortNames:");
  // console.log(sortNames);
  return (
    <div className="searchResults">
      {/* <SearchBar></SearchBar> */}
      <input
        type="text"
        placeholder="Search Employee"
        onChange={handleInputChange}
      />
      <br></br>

      <table>
        <tr>
          <th>Image</th>
          <th>
            Name <button onClick={() => sortFilteredNames()}>&#94;</button>
          </th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {filteredNames.map((result) => {
          const newDate = setDate(result);
          return (
            <tr>
              <td>
                <img
                  alt="Head Shot"
                  src={result.picture.thumbnail}
                  className="img-fluid"
                />
              </td>
              <td>
                {result.name.first} {result.name.last}
              </td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{newDate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
