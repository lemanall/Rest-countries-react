import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
// import Country from "./Country";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const countriesData = data.map((c) => {
      return { ...c, id: String(Math.random()) };
    });
    setCountries(countriesData);
    console.log(countriesData);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const removeCountry = (id) => {
    const newCountry = countries.filter((country) => country.id !== id);
    setCountries(newCountry);
  };

  return (
    <>
      <Filter setCountries={setCountries} countries={countries} />
      <section className="grid">
        {countries.map((country) => {
          const { id, name, area, population, region, capital, flags } =
            country;

          return (
            <article key={id}>
              <div>
                <img src={flags.png} alt="" />
                <div className="details">
                  <h3>{name.common}</h3>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span> {region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                  <div className="buttons">
                    <Link className="btn" to={`/countries/${name.common}`}>
                      Learn more
                    </Link>
                    <button className="btn" onClick={() => removeCountry(id)}>
                      Remove country
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
