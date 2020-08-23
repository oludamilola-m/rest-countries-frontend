import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main.js";
import axios from "axios";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    );
  }
}

export default App;
