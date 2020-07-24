import React from "react";
import countries from "../fakeData";

const Main = () => {
  return (
    <main>
      <section>
        <input
          type="text"
          name="country"
          placeholder="Search for a country ..."
          // value={""}
          // onChange={""}
        />
        <input
          type="text"
          name="region"
          placeholder="Filter by region"
          // value={""}
          // onChange={""}
        />
      </section>
      <section className="countries">
        {countries.map((country) => {
          return (
            <div key={country.name}>
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
        })}
      </section>
    </main>
  );
};

export default Main;
