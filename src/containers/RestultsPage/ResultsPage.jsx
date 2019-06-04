import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResultCard } from '../../components/ResultCard/ResultCard';

export class ResultsPage extends Component {
  render() {
    const { locations } = this.props;
    const results = locations.length
      ? locations.map(location => <ResultCard key={location.id} {...location} user={this.props.user}/>)
      : <div className="spinner-container">
          <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Loading Spinner" className="loading" />
        </div>
      
    return (
      <div className="ResultsPage">
        {results}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations,
  user: state.user
});

export default connect(mapStateToProps)(ResultsPage);