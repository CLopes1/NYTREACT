import React, { Component } from "react";
import Results from "./Components/Results";
import Archive from "./Components/Archive";
import SearchBox from "./Components/SearchBox";
import axios from 'axios';

import "./App.css";

class App extends Component {

  state = {
    articles: [],
  }

  handleSearch = (query) => {
    console.log('query', query);
    axios.post('api/search', query)
    .then((res) => {

      console.log('res', res);
      this.setState({ articles: res.data.articles });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="App-header">
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Article Scrubber</strong></h1>
            <p>Search for and annotate articles of interest!</p>
          </div>

          <SearchBox
            search={this.handleSearch}
          />

          {JSON.stringify(this.state.articles)}

          <Results
            results={this.state.results}
          />

          <Archive 
          />

        </div>
      </div>
    );
  }
}

export default App;
