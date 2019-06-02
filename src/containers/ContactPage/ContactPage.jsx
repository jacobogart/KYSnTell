import React, { Component } from 'react';
import { connect } from 'react-redux';
import { link } from 'fs';
import { setContacts } from '../../actions';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      input: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const contacts = [ ...this.state.contacts, this.state.input];
    this.setState({ contacts, input: '' })
  }

  storeContacts = () => {
    this.props.setContacts(this.state.contacts)
    this.props.history.push('/tell/details')
  }

  render() {
    const contactList = this.state.contacts.map(contact => <li>{contact}</li>)
    return (
      <div className="ContactPage">
        <ul className="contact-list">
          {contactList}
        </ul>
        <form 
          onSubmit={this.handleSubmit} 
          className="contact-form"
        >
          <input 
            type="text" 
            className="contact-input" 
            placeholder='(---) --- ----' 
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit" className="contact-button">
            Add Contact
          </button>
          <button className="contact-button" onClick={this.storeContacts}>
            Next Page
        </button>
        </form>  
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setContacts: (contacts) => dispatch(setContacts(contacts))
})

export default connect(null, mapDispatchToProps)(ContactPage);