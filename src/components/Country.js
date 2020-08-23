import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((res) => {
        console.log(res);
        setCountry(res.data[0]);
      });
  }, []);
  return (
    <div className="country-detail">
      <Link to="/">
        <button className="backBtn">Back</button>
      </Link>
      <div className="country__info">
        <div>
          <img
            src="https://restcountries.eu/data/ala.svg"
            alt="country Flag"
            className="country__flag"
          />
        </div>
        <div>
          <div>
            <h4>Nigeria</h4>
            <p>Population: 1000000</p>
            <p>Region: Africa</p>
            <p>Sub-Region: Africa</p>
            <p>Capital: Abuja</p>
          </div>
          <div>
            <p>Top Level Domain: be</p>
            <p>Currencies: Naira</p>
            <p>Languages: Yoruba, Igbo, Hausa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
