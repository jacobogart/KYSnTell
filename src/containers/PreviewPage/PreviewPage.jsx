import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSendMessage } from '../../api/fetchSendMessage'
import { setContacts } from '../../actions';


export class PreviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      contEdit: false
    }
    this.message = React.createRef();
  }

  componentDidMount() {
    this.setMessage();
  }

  setMessage = () => {
    const { diagnosis, timeFrame, additionalNotes } = this.props.details;
    let message = `Hello, we have been informed by an anonymous sexual partner that you may have been exposed to ${diagnosis} in the last ${timeFrame}. While this is no cause for alarm, we do recommend getting tested at your earliest convenience. To find a testing center near you, please visit kysntell.com, or contact your preferred healthcare provider.`
    if (additionalNotes) { message = message.concat(' ', `Additional notes from partner: ${additionalNotes}`) }
    this.setState({ message });
  }
  
  toggleEdit = (e) => {
    const { contEdit } = this.state;
    if (contEdit) {
      this.setState({ message: this.message.current.innerText });
      this.message.current.blur()
    } else {
      e.target.blur();
      this.message.current.focus();
    }
    this.setState({ contEdit: !contEdit });
  }

  handleSubmit = () => {
    fetchSendMessage(this.props.contacts, this.state.message)
      .then(res => {
        if (res.every(res => res.ok)) {
          this.props.history.push('/tell/success')
        } else {
          const failedContacts = res.filter(res => !res.ok).map(res => res.contact);
          console.log(failedContacts);
          this.props.setContacts(failedContacts);
          this.props.history.push('/tell/error')
        }
      })
  }

  render() {
    const { contEdit, message } = this.state;
    const buttonText = contEdit
      ? 'Save Changes'
      : 'Edit Message'
    return (
      <div className="PreviewPage">
        <div className="message-holder">
          <p
            tabIndex="0"
            ref={this.message}
            contentEditable={contEdit} 
            className={`message edit-${contEdit}`}
          >
            {message}
          </p>
        </div>
        <button onClick={this.toggleEdit}>{buttonText}</button>
        <button onClick={this.handleSubmit}>Send Message</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts,
  details: state.details
});

export const mapDispatchToProps = (dispatch) => ({
  setContacts: (contacts) => dispatch(setContacts(contacts))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPage);