import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

// import countries from "../fakeData";

const Main = ({ theme }) => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all`).then((res) => {
      console.log(res);
      const countries = res.data;
      setCountries(countries);
    });
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    let url;
    if (value === "") {
      url = "https://restcountries.com/v2/all";
    } else {
      url = `https://restcountries.com/v2/name/${value}`;
    }

    setError(false);

    axios
      .get(url)
      .then((res) => {
        const countries = res.data;
        setCountries(countries);
      })
      .catch(() => {
        setError(true);
      });
  };

  const filterByRegion = (e) => {
    const { value } = e.target;

    axios.get(`https://restcountries.com/v2/region/${value}`).then((res) => {
      const countries = res.data;
      setCountries(countries);
    });
  };

  const displayCountries = () => {
    if (error || countries.length === 0) {
      return <h4>No result found</h4>;
    }
    return countries.map((country) => {
      return <CountryCard key={country.name} country={country} />;
    });
  };
  return (
    <main className={theme}>
      <section className="inputText">
        <input
          type="text"
          name="country"
          placeholder="Search for a country ..."
          onChange={handleChange}
          className="inputText--country"
        />

        <select
          name="region"
          onChange={filterByRegion}
          className="inputText--region "
        >
          <option>Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
      <section className="countries">{displayCountries()}</section>
    </main>
  );
};

export default Main;
