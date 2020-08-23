import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country.alpha3Code}`}>
      <div className="country">
        <div className="country-flag">
          <img src={country.flag} alt="country Flag" className="country-img" />
        </div>
        <div className="country__info">
          <p className="country-name">{country.name}</p>
          <p className="country__info-p">
            <strong>Population:</strong> {country.population}
          </p>
          <p className="country__info-p">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="country__info-p">
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
