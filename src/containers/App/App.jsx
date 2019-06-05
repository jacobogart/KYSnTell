import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Splash } from '../../components/Splash/Splash';
import SearchPage from '../SearchPage/SearchPage';
import ResultsPage from '../RestultsPage/ResultsPage';
import LocationPage from '../LocationPage/LocationPage';
import { Header } from '../../components/Header/Header';
import ContactPage from '../ContactPage/ContactPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import PreviewPage from '../PreviewPage/PreviewPage';
import { Footer } from '../../components/Footer/Footer';
import { SuccessPage } from '../../components/SuccessPage/SuccessPage';
import ErrorPage from '../ErrorPage/ErrorPage';

export class App extends Component {
  
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
          <Route exact path='/tell/preview' component={PreviewPage} />
          <Route exact path='/tell/success' component={SuccessPage} />
          <Route exact path='/tell/error' component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  locations: state.locations
});

export default connect(mapStateToProps)(App);
