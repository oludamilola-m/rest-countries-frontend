import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main.js";
import "./App.css";

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
