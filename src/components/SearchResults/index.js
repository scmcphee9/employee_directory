import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import SearchBar from "../Searchbar/index";

function App() {
  const [employeeState, setEmployeeState] = useState([]);
  const [search, setSearch] = useState("");

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
    return name.name.first.toLowerCase().includes(search.toLowerCase());
  });

  console.log("filtered names: ");
  console.log(filteredNames);

  const sortNames = employeeState.sort(function (a, b) {
    const nameA = a.name.first.toLowerCase();
    const nameB = b.name.first.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return (
    <div>
      {/* <SearchBar></SearchBar> */}
      <input
        type="text"
        placeholder="Search Employee"
        onChange={handleInputChange}
      />

      <table>
        <tr>
          <th>Image</th>
          <th onClick={sortNames}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {filteredNames.map((result) => {
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
              <td>{result.dob.date}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
