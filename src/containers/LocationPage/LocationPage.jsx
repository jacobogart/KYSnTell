import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map/Map';

class LocationPage extends Component {
  render() {
    const id = this.props.location.pathname.split('/')[3];
    // const { title, address, point, link, telephone } = this.props.locations.find(location => location.id === id);
  
    const location = {
      title: 'Healthy Living Project Incorporated',
      link: 'https://gettested.cdc.gov/gettested_redirect/110871',
      id: '110871',
      address: '8650 W 95th St;Overland Park, KS 66212',
      telephone: '(913)-708-1414',
      point: {
        lat: '38.9569213',
        lng: '-94.6859152'
      }
    }

    const { title, address, point, link, telephone } = location;

    return (
      <article className='LocationPage'>
        <Map point={point}/>
        <div className="location-info">
          <h3>{title}</h3>
          <p>{address.split(';')[0]} <br /> {address.split(';')[1]}</p>
          <div className="link-holder">
            <a href={`tel:${telephone}`}><i class="fas fa-phone"></i>{telephone}</a>
            <a href={link}><i className="fas fa-globe"></i>Website</a>
          </div>
        </div>
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