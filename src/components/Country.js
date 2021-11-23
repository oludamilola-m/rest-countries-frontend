import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Country = ({ theme }) => {
  const [country, setCountry] = useState({});
  const { code } = useParams();
  useEffect(() => {
    axios.get(`https://restcountries.com/v2/alpha/${code}`).then((res) => {
      console.log(res);
      setCountry(res.data);
    });
  }, [code]);
  return (
    <div className={`country-detail ${theme}`}>
      <Link to="/">
        <button className="backBtn">
          <FontAwesomeIcon icon="arrow-left" />
          <span style={{ marginLeft: "5px" }}>Back</span>
        </button>
      </Link>
      {country.name && (
        <div className="country__info">
          <div className="country__info__item">
            <img
              src={country.flag}
              alt="country Flag"
              className="country__flag"
              data-testid="country-flag"
            />
          </div>
          <div className="country__info__item">
            <div className="detailed-information">
              <div className="detailed-information__item">
                <h4 data-testid="country-name">
                  <strong>{country.name}</strong>
                </h4>
                <p data-testid="country-native-name">
                  <span>Native name: </span> {country.nativeName}
                </p>
                <p data-testid="country-population">
                  <span>Population: </span>{" "}
                  <NumberFormat
                    value={country.population}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </p>
                <p data-testid="country-region">
                  <span>Region: </span> {country.region}
                </p>
                <p data-testid="country-sub-region">
                  <span>Sub-Region: </span>
                  {country.subregion}
                </p>
                <p data-testid="country-capital">
                  <span>Capital: </span> {country.capital}
                </p>
              </div>
              <div className="additional-information detailed-information__item">
                <p data-testid="country-top-level-domain">
                  <span>Top Level Domain: </span> {country.topLevelDomain}
                </p>
                <p data-testid="country-currencies">
                  <span>Currencies:</span> {country.currencies[0].name}
                </p>
                <p data-testid="country-languages">
                  <span>Languages:</span>{" "}
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="border-countries" data-testid="country-borders">
              <p>Border Countries: </p>
              {country.borders &&
                country.borders.map((border) => {
                  return (
                    <Link to={`/${border}`} key={border}>
                      <span>{border}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
