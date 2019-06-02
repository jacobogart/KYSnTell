import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Splash } from '../../components/Splash/Splash';
import SearchPage from '../SearchPage/SearchPage';
import ResultsPage from '../RestultsPage/ResultsPage';
import LocationPage from '../LocationPage/LocationPage';
import { Header } from '../../components/Header/Header';
import { sendMessage } from '../../api/twilio/send_sms';
import ContactPage from '../ContactPage/ContactPage';
import DetailsPage from '../DetailsPage/DetailsPage';

export class App extends Component {
  // componentDidMount() {
  //   sendMessage();
  // }
  
  render() {
    return (
      <div className='App'>
        <Route path='/' component={Header} />
        <Switch >
          <Route exact path='/' component={Splash} />
          <Route exact path='/kys' component={SearchPage} />
          <Route exact path='/kys/locations' component={ResultsPage} />
          <Route path='/kys/locations/:id' component={LocationPage} />
          <Route exact path='/tell' component={ContactPage} />
          <Route exact path='/tell/details' component={DetailsPage} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations
});

export default connect(mapStateToProps)(App);
