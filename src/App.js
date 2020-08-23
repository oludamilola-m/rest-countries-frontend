import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main.js";
import axios from "axios";

import "./App.scss";

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      const countries = res.data;
      this.setState({ countries: countries });
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    axios.get(`https://restcountries.eu/rest/v2/name/${value}`).then((res) => {
      const countries = res.data;
      this.setState({ countries: countries });
    });
  };

  filterByRegion = (e) => {
    const { value } = e.target;

    axios
      .get(`https://restcountries.eu/rest/v2/region/${value}`)
      .then((res) => {
        const countries = res.data;
        this.setState({ countries: countries });
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Main
          countries={this.state.countries}
          country={this.state.country}
          handleChange={this.handleChange}
          region={this.state.region}
          filterByRegion={this.filterByRegion}
        />
      </Fragment>
    );
  }
}

export default App;
