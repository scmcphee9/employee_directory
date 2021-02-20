import React, { Component, useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";

// class EmployeeResults extends Component {
//   state = {
//     image: "",
//     name: "",
//     phone: "",
//     email: "",
//     dob: "",
//   };

//   componentDidMount() {
//     this.SearchEmployees();
//   }

//   // need an onchangeevent no button
//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     this.SearchEmployees(this.state.getEmployees);
//   };

//   SearchEmployees = (query) => {
//     API.getEmployees(query)
//       .then((res) => this.setState({ results: res.data.data }))
//       .catch((err) => console.log(err));
//   };

//   handleInputChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value,
//     });
//   };
//   // () {
//   //   fetchEmployees = () => {
//   //     API.getEmployees()
//   //       .then((res) => this.setState({}))
//   //       .catch((err) => console.log(err));
//   //   };
//   // }

//   render() {
//     return (
//       <ul className="list-group search-results">
//         <h1>Search Results</h1>
//         {/* {props.results.map((result) => (
//       <li key={result} className="list-group-item">
//         <img alt="Dog" src={result} className="img-fluid" />
//       </li>
//     ))} */}
//       </ul>
//     );
//   }
// }
// export default EmployeeResults;
function App() {
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then((res) => {
        setEmployeeState(res.data.results);
        console.log("Employee State:");
        console.log(employeeState);
      })
      .catch((err) => console.log(err));
  }, []);

  // const { image, name, phone, email, dob } = employeeState;

  return (
    <ul className="list-group search-results">
      {console.log(employeeState)}

      {/* map through each returned employee returning all information for each employee on one line, new employee on next line */}
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {employeeState.map((result) => {
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
    </ul>
  );
}

export default App;
