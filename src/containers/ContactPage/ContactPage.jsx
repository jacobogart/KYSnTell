import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContacts } from '../../actions';
import phone from 'phone';
export class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      input: '',
      error: false
    };
  }
  
  handleChange = (e) => {
    this.setState({ input: e.target.value, error: false });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formattedContact = phone(this.state.input);
    formattedContact.length 
      ? this.setState({ contacts: [...this.state.contacts, formattedContact[0]]})
      : this.setState({ error: true })
    this.setState({ input: '' })
  }

  storeContacts = () => {
    this.props.setContacts(this.state.contacts)
    this.props.history.push('/tell/details')
  }

  render() {
    const contactList = this.state.contacts.map(contact => {
      let numbers = contact.split('');
      const [ , , a, b, c, d, e, f, g, h, i, j] = numbers;
      return <li key={contact}>{`(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`}</li>})
    return (
      <div className="ContactPage">
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
          {this.state.error &&
          <p className="error">Please enter a valid 10-digit phone number.</p>}
          <button type="submit" className="contact-button">
            Add Contact
          </button>
          <div className="contact-list-container">
            <ol className="contact-list">
              {contactList.length ? contactList
                : <p>Please add a phone number</p>}
            </ol>
          </div>
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