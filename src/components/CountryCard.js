import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div>
      <div>
        <img src={country.flag} alt="country Flag" />
      </div>
      <div>
        <p>{country.name}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
