import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Searchbar />
        <SearchResults />
      </div>
    </Router>
  );
}

export default App;
