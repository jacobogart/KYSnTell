import React from 'react'
import { connect } from 'react-redux';

export const ErrorPage = (props) => {
  return (
    <div>
      <p>Failed to send to...</p>
      {props.contacts.map(contact => <p>{contact}</p>)}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(ErrorPage)
