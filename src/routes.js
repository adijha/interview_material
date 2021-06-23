import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Listing from "./Listing";
import App from "./App";

export default function RoutesManager(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/listing" component={Listing} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}
