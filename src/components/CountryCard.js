import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  if (country) {
    return (
      <Link to={`/${country.alpha3Code}`}>
        <div className="country">
          <div className="country-flag">
            <img
              src={country.flag}
              alt="country Flag"
              className="country-img"
              data-testid="country-flag"
            />
          </div>
          <div className="country__info">
            <p className="country-name" data-testid="country-name">
              {country.name}
            </p>
            <p className="country__info-p" data-testid="country-population">
              <strong>Population:</strong> {country.population}
            </p>
            <p className="country__info-p" data-testid="country-region">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="country__info-p" data-testid="country-capital">
              <strong>Capital:</strong> {country.capital}
            </p>
          </div>
        </div>
      </Link>
    );
  } else {
    return <div></div>;
  }
};

export default CountryCard;
