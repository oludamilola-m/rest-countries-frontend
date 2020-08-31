import React from "react";
import CountryCard from "../CountryCard";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

const country = {
  name: "Nigeria",
  population: "1000000",
  region: "Africa",
  capital: "Abuja",
  flag: "https://restcountries.eu/data/dza.svg",
  // alpha3Code: "DZA",
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CountryCard />, div);
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <CountryCard country={country} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("displays country properties", () => {
  const { getByTestId } = render(
    <Router>
      <CountryCard country={country} />
    </Router>
  );

  expect(getByTestId("country-name")).toHaveTextContent(country.name);
  expect(getByTestId("country-flag")).toHaveAttribute("src", country.flag);
  expect(getByTestId("country-population")).toHaveTextContent(
    country.population
  );
  expect(getByTestId("country-capital")).toHaveTextContent(country.capital);
});
