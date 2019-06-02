import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContacts: false
    }
  }

  toggleContacts = () => {
    this.setState({ showContacts: !this.state.showContacts})
  }
  
  render() {
    const contactList = this.props.contacts.map(contact => <li>{contact}</li>)
    const contactsDisplay = this.state.showContacts 
      ? <ul className="contact-list">
          {contactList}
        </ul>
      : <p onClick={this.toggleContacts}>{`${this.props.contacts[0]}...`}</p>
    return (
      <div>
        {contactsDisplay}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(DetailsPage);