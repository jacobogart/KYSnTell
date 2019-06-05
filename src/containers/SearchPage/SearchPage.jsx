import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../../api/fetchLocations';
import { fetchLatLong } from '../../api/fetchLatLong';
import { setLocations, setUserLocation } from '../../actions';



export class SearchPage extends Component {
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
    return fetchLatLong(zipcode)
      .then(location => {
        this.props.setUserLocation(location);
        return fetchLocations(location, distance);
      })
      .then(results => this.props.setLocations(results))
  }

  render() {
    return (
      <form className="SearchPage" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="zipcode" 
          placeholder="Zipcode..."
          className="search-input" 
          onChange={this.handleChange}
        />
        <select 
          name="distance" 
          onChange={this.handleChange}
          className="search-input"
        >
          <option value="10">10 miles</option>
          <option value="20">20 miles</option>
          <option value="30">30 miles</option>
          <option value="40">40 miles</option>
          <option value="50">50 miles</option>
        </select>
        <button type="submit" >
          Use zipcode
        </button>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch)  => ({
  setLocations: (locations) => dispatch(setLocations(locations)),
  setUserLocation: (location) => dispatch(setUserLocation(location))
});

export default connect(null, mapDispatchToProps)(SearchPage);