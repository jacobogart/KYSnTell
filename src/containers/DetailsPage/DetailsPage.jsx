import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDetails } from '../../actions';

export class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagnosis: '',
      timeFrame: '',
      additionalNotes: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const details = { ...this.state }
    this.props.setDetails(details);
    this.props.history.push('/tell/preview')
  }
  
  render() {
    const contactList = this.props.contacts.map(contact => {
      let numbers = contact.split('');
      const [, , a, b, c, d, e, f, g, h, i, j] = numbers;
      return <li key={contact}>{`(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`}</li>
    })
    const contactsDisplay = 
      <ol className="contact-list-details contact-list">
        {contactList}
      </ol>
    const stds = ['HIV/AIDS', 'HPV(Human Papillomavirus)', 'Chlamydia', 'Gonorrhea', 'Syphilis', 'Herpes', 'Trichomoniasis'];
    const stdOptions = stds.map(std => <option key={std} value={std}>{std}</option>)
    return (
      <div className="DetailsPage">
        <p>Contacts</p>
        {contactsDisplay}
        <form className="details-form" onSubmit={this.handleSubmit}>
          <div className="select-holder">
            <label htmlFor="diagnosis">Diagnosis</label>
            <select
              name="diagnosis"
              id="diagnosis"
              onChange={this.handleChange}
              className="search-input"
            >
              <option value="" disabled selected>Select</option>
              {stdOptions}
            </select>
          </div>
          <div className="select-holder">
            <label htmlFor="timeFrame">Time since last test</label>
            <select
              name="timeFrame"
              id="timeFrame"
              onChange={this.handleChange}
              className="search-input"
            >
              <option value="" disabled selected>Select</option>
              <option value="month">one month</option>
              <option value="two months">two months</option>
              <option value="three months">three months</option>
              <option value="six months">six months</option>
              <option value="year">year</option>
              <option value="other">other</option>
            </select>
          </div>
          <input
            type="text"
            name="additionalNotes"
            placeholder="Additional notes..."
            className="search-input notes"
            onChange={this.handleChange}
          />
          <button type="submit" >
            Preview
          </button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export const mapDispatchToProps = (dispatch) => ({
  setDetails: (details) => dispatch(setDetails(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);