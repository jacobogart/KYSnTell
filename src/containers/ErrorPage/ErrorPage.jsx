import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const ErrorPage = (props) => {
  return (
    <div className="ErrorPage">
      <p>Failed to send to...</p>
      {props.contacts.map(contact => <p key={contact}>{contact}</p>)}
      <Link to='/tell'>Please try again.</Link>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(ErrorPage)
