import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/login/Login";
import DashboardRouter from "./DashboardRouter";

class AppRouters extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
           <Route exact path="/login" component={Login}/>
           <Route  path="/" component={DashboardRouter}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouters;
