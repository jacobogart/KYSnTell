import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <h1>DETAILS</h1>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(DetailsPage);