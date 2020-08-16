import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroeScreen from '../components/heroes/HeroeScreen';
import DcScreen from '../components/dc/DcScreen';
import { Navbar } from '../components/ui/Navbar';
import SearchScreen from '../components/Search/SearchScreen';

class DashboardRouter extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/hero/:heroeId" component={HeroeScreen} />
            <Route exact path="/dc" component={DcScreen} />
            <Route exact path="/search" component={SearchScreen} />

            <Redirect to="/marvel" />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default DashboardRouter;
