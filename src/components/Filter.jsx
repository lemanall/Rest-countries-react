import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1/all";

const Filter = ({ setCountries, countries }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setCountries(filteredCountries)
    } else {
      setCountries(countries)
    }
  }

 

  const inputHandle = (e) => {
    e.preventDefault();
  };

  return (
    <section className="filter">
      <form className="form-control" onSubmit={inputHandle}>
        <input
          type="text"
          
          name="search"
          id="search"
          onChange={(e) => searchCountries(e.target.value)}
          placeholder="Search for a country"
        />
      </form>

      <div className="region-filter">
        <select name="select" className="select" id="select">
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
