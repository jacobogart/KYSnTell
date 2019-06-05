import React from 'react';
import { Switch, Route } from 'react-router';
import { Splash } from '../Splash/Splash';
import SearchPage from '../../containers/SearchPage/SearchPage';
import ResultsPage from '../../containers/RestultsPage/ResultsPage';
import LocationPage from '../../containers/LocationPage/LocationPage';
import { Header } from '../Header/Header';
import ContactPage from '../../containers/ContactPage/ContactPage';
import DetailsPage from '../../containers/DetailsPage/DetailsPage';
import PreviewPage from '../../containers/PreviewPage/PreviewPage';
import { Footer } from '../Footer/Footer';
import { SuccessPage } from '../SuccessPage/SuccessPage';
import ErrorPage from '../../containers/ErrorPage/ErrorPage';

const App = () => {

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

export default App;