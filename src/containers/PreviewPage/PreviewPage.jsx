import React, { Component } from 'react';
import { connect } from 'react-redux';


class PreviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    const { diagnosis, timeFrame, additionalNotes } = this.props.details;
    let message = `Hello, we have been informed by an anonymous sexual partner that you may have been exposed to ${diagnosis} in the last ${timeFrame}. While this is no cause for alarm, we do recommend getting tested at your earliest conventience. To find a testing center near you, please visis kysntell.com, or contact your prefered healthcare provider.`
    if (additionalNotes) { message = message.concat(' ', `Additional notes from partner: ${additionalNotes}`)}
    this.setState({ message });
  }
  
  render() {
    return (
      <div className="PreviewPage">
        <div className="message-holder">
          <p className="message">{this.state.message}</p>
        </div>
        <button>Edit Message</button>
        <button>Send Message</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts,
  details: state.details
})

export default connect(mapStateToProps)(PreviewPage);