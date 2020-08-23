import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main.js";
import Country from "./components/Country";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/:code">
            <Country />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
