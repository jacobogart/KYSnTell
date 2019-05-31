import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../../api/fetchLocations';
import { fetchLatLong } from '../../api/fetchLatLong';



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
    const { zipcode, distance } = this.state;
    e.preventDefault();
    fetchLatLong(zipcode)
      .then(location => fetchLocations(location, distance))
      .then(results => console.log(results))
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

export const mapStateToProps = (state)  => ({

});

export default connect(mapStateToProps)(SearchPage);