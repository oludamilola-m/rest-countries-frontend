import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Country = () => {
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((res) => {
        const country = res.data;
        console.log(country);
      });
  }, []);
  return <div>{name}</div>;
};

export default Country;
