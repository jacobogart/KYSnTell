import React from 'react';
import { connect } from 'react-redux';
import { ResultCard } from '../../components/ResultCard/ResultCard';

export const ResultsPage = (props) => {
  const { locations } = props;
  const results = locations.length
    ? locations.map(location => <ResultCard key={location.id} {...location} user={props.user}/>)
    : <div className="spinner-container">
        <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Loading Spinner" className="loading" />
      </div>
    
  return (
    <div className="ResultsPage">
      {results}
    </div>
  );
}

export const mapStateToProps = (state) => ({
  locations: state.locations,
  user: state.user
});

export default connect(mapStateToProps)(ResultsPage);