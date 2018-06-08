import React, { Component } from "react";
import Results from "./Components/Results";
import Archive from "./Components/Archive";
import SearchBox from "./Components/Archive";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header">
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Article Scrubber</strong></h1>
            <p>Search for and annotate articles of interest!</p>
          </div>

          <SearchBox

          />

          <Results
          />

          <Archive 
          />

        </div>
      </div>
    );
  }
}

export default App;
