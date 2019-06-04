import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationPage extends Component {
  render() {
    const id = this.props.location.pathname.split('/')[3];
    const { title, address } = this.props.locations.find(location => location.id === id);
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