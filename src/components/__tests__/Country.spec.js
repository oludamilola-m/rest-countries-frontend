import React from "react";
import Country from "../Country";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  render,
  cleanup,
  waitForElement,
  act,
  screen,
  waitFor,
} from "@testing-library/react";
//import renderer from "react-test-renderer";
const axios = require("axios");

afterEach(cleanup);
jest.mock("axios");

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Country />
    </Router>,
    div
  );
});

describe("page elements", () => {
  axios.get.mockResolvedValue({
    data: {
      name: "Nigeria",
      topLevelDomain: [".ng"],
      alpha2Code: "NG",
      alpha3Code: "NGA",
      capital: "Abuja",
      region: "Africa",
      subregion: "Western Africa",
      population: 186988000,
      borders: ["BEN", "CMR", "TCD", "NER"],
      nativeName: "Nigeria",
      currencies: [
        {
          name: "Nigerian naira",
        },
      ],
      languages: [
        {
          name: "English",
          nativeName: "English",
        },
      ],
      flag: "https://restcountries.eu/data/nga.svg",
    },
  });

  beforeEach(async () => {
    jest.clearAllMocks();
    await act(async () => {
      render(
        <Router>
          <Country />
        </Router>
      );
    });
  });

  it("displays country flag", async () => {
    expect(await screen.getByTestId("country-flag")).toHaveAttribute(
      "src",
      "https://restcountries.eu/data/nga.svg"
    );
  });

  it("displays country name", async () => {
    expect(await screen.getByTestId("country-name")).toHaveTextContent(
      "Nigeria"
    );
  });

  it("displays country native name", async () => {
    expect(await screen.getByTestId("country-native-name")).toHaveTextContent(
      "Nigeria"
    );
  });

  it("displays country population", async () => {
    expect(await screen.getByTestId("country-population")).toHaveTextContent(
      "186,988,000"
    );
  });

  it("displays country region", async () => {
    expect(await screen.getByTestId("country-region")).toHaveTextContent(
      "Africa"
    );
  });

  it("displays country sub-region", async () => {
    expect(await screen.getByTestId("country-sub-region")).toHaveTextContent(
      "Western Africa"
    );
  });

  it("displays country capital", async () => {
    expect(await screen.getByTestId("country-capital")).toHaveTextContent(
      "Abuja"
    );
  });

  it("displays country top-level-domain", async () => {
    expect(
      await screen.getByTestId("country-top-level-domain")
    ).toHaveTextContent("Top Level Domain: .ng");
  });

  it("displays country borders", async () => {
    expect(await screen.getByTestId("country-borders")).toHaveTextContent(
      "Border Countries: BENCMRTCDNER"
    );
  });

  it("displays country currencies", async () => {
    expect(await screen.getByTestId("country-currencies")).toHaveTextContent(
      "Currencies: Nigerian naira"
    );
  });

  it("displays country languages", async () => {
    expect(await screen.getByTestId("country-languages")).toHaveTextContent(
      "Languages: English"
    );
  });
});
