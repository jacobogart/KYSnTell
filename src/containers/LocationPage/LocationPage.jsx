import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map/Map';

export const LocationPage = (props) => {
  const id = props.location.pathname.split('/')[3];
  const { title, address, point, link, telephone } = props.locations.find(location => location.id === id);

  return (
    <article className='LocationPage'>
      <div className="location-info">
        <h3>{title}</h3>
        <p>{address.split(';')[0]} <br /> {address.split(';')[1]}</p>
        <div className="link-holder">
          <a href={`tel:${telephone}`}><i className="fas fa-phone"></i>{telephone}</a>
          <a href={link}><i className="fas fa-globe"></i>Website</a>
        </div>
      </div>
      <Map point={point} />
    </article>
  );
}

export const mapStateToProps = (state) => ({
  locations: state.locations
})

export default connect(mapStateToProps)(LocationPage);