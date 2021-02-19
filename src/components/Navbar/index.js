import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav>
      <h2>Employee Directory</h2>
      <p>
        Click on carrots to filter by heading or use the search box to narrow
        your results.
      </p>
    </nav>
  );
}

export default Navbar;
