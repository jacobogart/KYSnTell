import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleKey } from '../../api/utilities';
import { MapPoint } from '../MapPoint/MapPoint';

export class Map extends Component {

  render() {
    const { point } = this.props;
    const center = {
      lat: +point.lat,
      lng: +point.lng
    }
    return (
      <figure className="Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleKey }}
          defaultCenter={center}
          defaultZoom={15}
        >
          <MapPoint
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
      </figure>
    );
  }
}

export default Map;