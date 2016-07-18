import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    // value of input mapped to this.state.term
    this.state = { term: '' }

    /*
      (after equal sign) **this** refers to instance of SearchBar has a function called onInputChange

      bind that function to **this**(SearchBar) and replace onInputChange with new bound instance of function
    */
    // bind context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // need to go fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
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

function mapDispatchToProps(dispatch) {
  // this causes action creator whenever called
  // returns action, bindActionCreators with dispatch makes sure action flows into middleware and reducer
  return bindActionCreators({ fetchWeather }, dispatch);
}

/*
  passing in null because whenever passing in function that is supposed to map dispatch to props it always goes in as second argument
*/
export default connect(null, mapDispatchToProps)(SearchBar);
