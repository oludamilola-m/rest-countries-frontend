import React from "react";
import Country from "./CountryCard";

// import countries from "../fakeData";

const Main = (props) => {
  const displayCountries = () => {
    return props.countries.map((country) => {
      return <Country key={country.name} country={country} />;
    });
  };
  return (
    <main>
      <section>
        <input
          type="text"
          name="country"
          placeholder="Search for a country ..."
          value={props.country}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="region"
          placeholder="Filter by region"
          // value={""}
          // onChange={""}
        />
      </section>
      <section className="countries">{displayCountries()}</section>
    </main>
  );
};

export default Main;
