import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLocations } from '../../api/fetchLocations';
import { fetchLatLong } from '../../api/fetchLatLong';
import { setLocations } from '../../actions';



class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      distance: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { zipcode, distance } = this.state;
    this.props.history.push('/kys/locations');
    fetchLatLong(zipcode)
      .then(location => fetchLocations(location, distance))
      .then(results => this.props.setLocations(results))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="zipcode" className="search-input" onChange={this.handleChange}/>
        <input type="text" name="distance" className="search-input" onChange={this.handleChange} />
        <button type="submit" >
          Use zipcode
        </button>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch)  => ({
  setLocations: (locations) => dispatch(setLocations(locations))
});

export default connect(null, mapDispatchToProps)(SearchPage);