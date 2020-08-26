import React, { useContext, Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main.js";
import Country from "./components/Country";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "./themeContext";

import "./App.scss";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Switch>
        <Route exact path="/">
          <Main theme={theme} />
        </Route>
        <Route exact path="/:code">
          <Country theme={theme} />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
