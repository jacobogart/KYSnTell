import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Splash } from '../../components/Splash/Splash';
import { KysHome } from '../KysHome/KysHome';
import { TellHome } from '../TellHome/TellHome';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch >
          <Route exact path='/' component={Splash} />
          <Route exact path='/kys' component={KysHome} />
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
