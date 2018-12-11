import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
    };

    this.onTermChange = this.onTermChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onSubmit}>
        <input
          placeholder="Get a five day forcast in your cities!"
          className="form-control"
          value={this.state.term}
          onChange={this.onTermChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
