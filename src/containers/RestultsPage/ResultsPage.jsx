import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResultCard } from '../../components/ResultCard/ResultCard';

export class ResultsPage extends Component {
  render() {
    const { locations } = this.props;
    const results = locations.length
      ? locations.map(location => <ResultCard {...location} />)
      : <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Loading Spinner" className="loading" />
    return (
      <div>
        <h2>Results</h2>
        {results}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations
});

export default connect(mapStateToProps)(ResultsPage);