import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/recipe" copmonent={Recipe} />
    </Switch>
  </BrowserRouter>
);
export default Router;