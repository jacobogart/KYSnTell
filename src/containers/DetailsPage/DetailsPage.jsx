import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContacts: false,
      diagnosis: '',
      timeFrame: '',
      additionalNotes: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleContacts = () => {
    this.setState({ showContacts: !this.state.showContacts})
  }
  
  render() {
    const contactList = this.props.contacts.map(contact => <li>{contact}</li>)
    const contactsDisplay = this.state.showContacts 
      ? <ol className="contact-list">
          {contactList}
        </ol>
      : <p onClick={this.toggleContacts}>{`${this.props.contacts[0]}...`}</p>
    return (
      <div className="DetailsPage">
        {contactsDisplay}
        <form classNall='details-form' onSubmit={this.handleSubmit}>
          <select
            name="timeFrame"
            onChange={this.handleChange}
            className="search-input"
          >
            <option value="10">10 miles</option>
            <option value="20">20 miles</option>
            <option value="30">30 miles</option>
            <option value="40">40 miles</option>
            <option value="50">50 miles</option>
          </select>
          <select
            name="distance"
            onChange={this.handleChange}
            className="search-input"
          >
            <option value="10">10 miles</option>
            <option value="20">20 miles</option>
            <option value="30">30 miles</option>
            <option value="40">40 miles</option>
            <option value="50">50 miles</option>
          </select>
          <input
            type="text"
            name="aditionalNotes"
            placeholder="Additional notes..."
            className="search-input"
            onChange={this.handleChange}
          />
          <button type="submit" >
            Use zipcode
        </button>
        </form>

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(DetailsPage);