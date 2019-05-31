import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import SearchPage from '../SearchPage/SearchPage';

export class KysHome extends Component {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path='/kys' component={SearchPage} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps,)(KysHome);