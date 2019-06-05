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
      distance: '',
      isLoading: false,
      error: false
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { zipcode, distance } = this.state;
    this.setState({ isLoading: true, error: false })
    return fetchLatLong(zipcode)
      .then(location => {
        this.props.setUserLocation(location);
        return fetchLocations(location, distance);
      })
      .then(results => {
        this.setState({ isLoading: false })
        if (results.length) {
          this.props.setLocations(results)
          this.props.history.push('/kys/locations');
        } else {
          this.setState({ error: true })
        }
      })
  }

  render() {
    const { isLoading, error } = this.state; 
    const form = <form className="SearchPage" onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="zipcode"
        placeholder="Zipcode..."
        className="search-input"
        value={this.state.zipcode}
        onChange={this.handleChange}
      />
      <div className='distance-holder'>
        {error && <p className='search-error'>No locations found, please increase range</p>}
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

      </div>
      <button type="submit" >
        Use zipcode
        </button>
    </form>

    const loading = <div className="spinner-container">
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Loading Spinner" className="loading" />
    </div>

    return (
      <div>
        {isLoading ? loading : form}
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch)  => ({
  setLocations: (locations) => dispatch(setLocations(locations)),
  setUserLocation: (location) => dispatch(setUserLocation(location))
});

export default connect(null, mapDispatchToProps)(SearchPage);