import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const Country = () => {
  const [country, setCountry] = useState({});
  const { code } = useParams();
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`).then((res) => {
      console.log(res);
      setCountry(res.data);
    });
  }, [code]);
  return (
    <div className="country-detail">
      <Link to="/">
        <button className="backBtn">Back</button>
      </Link>
      {country.name && (
        <div className="country__info">
          <div className="country__info__item">
            <img
              src={country.flag}
              alt="country Flag"
              className="country__flag"
            />
          </div>
          <div className="country__info__item">
            <div className="detailed-information">
              <div className="detailed-information__item">
                <h4>
                  <strong>{country.name}</strong>
                </h4>
                <p>
                  <span>Native name: </span> {country.nativeName}
                </p>
                <p>
                  <span>Population: </span>{" "}
                  <NumberFormat
                    value={country.population}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </p>
                <p>
                  <span>Region: </span> {country.region}
                </p>
                <p>
                  <span>Sub-Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span> {country.capital}
                </p>
              </div>
              <div className="additional-information detailed-information__item">
                <p>
                  <span>Top Level Domain: </span> {country.topLevelDomain}
                </p>
                <p>
                  <span>Currencies:</span> {country.currencies[0].name}
                </p>
                <p>
                  <span>Languages:</span>{" "}
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="border-countries">
              <p>Border Countries: </p>
              {country.borders.map((border) => {
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
