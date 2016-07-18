import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    // value of input mapped to this.state.term
    this.state = { term: '' }

    // bind context of onInputChange
    /*
      (after equal sign) **this** refers to instance of SearchBar has a function called onInputChange

      bind that function to **this**(SearchBar) and replace onInputChange with new bound instance of function
    */
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
