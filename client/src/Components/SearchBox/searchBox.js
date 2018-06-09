import React, { Component } from "react";
import "./searchBox.css";

class SearchBox extends Component {

  state = {
    searchTerm: 'Trump',
    startYear: '2015',
    endYear: '2018',
    numRecords: '5',
  }

  search = (e) => {
    e.preventDefault();
    let { searchTerm, startYear, endYear, numRecords } = this.state;
    //let searchTerm = this.state.searchTerm;
    //let startYear = this.state.startYear;
    //...

    this.props.search({
      searchTerm,
      startYear,
      endYear,
      numRecords,
    });
  }

  render() {
    return (
      <div className="row" >
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3 className=""><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
            </div>
            <div className="card-body">

              <form role="form">

                <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => this.setState({ searchTerm: e.target.value })}
                    value={this.state.searchTerm}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pwd">Number of Records to Retrieve:</label>
                  <select
                    className="form-control"
                    onChange={(e) => this.setState({ numRecords: e.target.value })}
                    value={this.state.numRecords}
                  >
                    <option value="1">1</option>
                    <option value="5" defaultValue>5</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="start-year">Start Year (Optional):</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => this.setState({ startYear: e.target.value })}
                    value={this.state.startYear}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="end-year">End Year (Optional):</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => this.setState({ endYear: e.target.value })}
                    value={this.state.endYear}
                  />
                </div>

                <button
                  onClick={this.search}
                  type="submit"
                  className="btn btn-default"
                >
                  <i className="fa fa-search"></i> Search
            </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => this.setState({
                    searchTerm: '',
                    startYear: '',
                    endYear: '',
                    numRecords: '5',
                  })}
                ><i className="fa fa-trash"></i> Clear Results</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
