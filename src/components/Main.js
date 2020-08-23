import React from "react";
import CountryCard from "./CountryCard";

// import countries from "../fakeData";

const Main = (props) => {
  const displayCountries = () => {
    return props.countries.map((country) => {
      return <CountryCard key={country.name} country={country} />;
    });
  };
  return (
    <main>
      <section className="inputText">
        <input
          type="text"
          name="country"
          placeholder="Search for a country ..."
          onChange={props.handleChange}
          className="inputText--country"
        />

        <select
          name="region"
          onChange={props.filterByRegion}
          className="inputText--region "
        >
          <option>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </section>
      <section className="countries">{displayCountries()}</section>
    </main>
  );
};

export default Main;
