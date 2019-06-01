import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Splash } from '../../components/Splash/Splash';
import { TellHome } from '../TellHome/TellHome';
import SearchPage from '../SearchPage/SearchPage';
import ResultsPage from '../RestultsPage/ResultsPage';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch >
          <Route exact path='/' component={Splash} />
          <Route exact path='/kys' component={SearchPage} />
          <Route exact path='/kys/locations' component={ResultsPage} />
          <Route exact path='/tell' component={TellHome} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations
});

export default connect(mapStateToProps)(App);
