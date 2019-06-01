import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationPage extends Component {
  render() {
    const id = this.props.location.pathname.split('/')[3];
    // const { title, address } = this.props.locations.find(location => location.id === id);
    const { title, address } = {
      title: 'Platte County Health Department',
        link: 'https://gettested.cdc.gov/gettested_redirect/37359',
          id: '37359',
            address: '1201 East St;Parkville, MO 64152',
              telephone: '(816)-587-5998',
                point: {
        lat: '39.1952922',
          'long': '-94.6817269'
      }
    }
    return (
      <article>
        <h3>{title}</h3>
        <p>{address}</p>
      </article>
    );
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations
})

export default connect(
  mapStateToProps,
)(LocationPage);