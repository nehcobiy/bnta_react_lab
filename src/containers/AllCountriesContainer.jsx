import { useState, useEffect } from "react";
import CountriesContainer from "./CountriesContainer";

const AllCountriesContainer = () => {
  const [countries, setCountries] = useState(null);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCountries(response);
      });
  }, []);

  const visitCountry = (country) => {
    if (!visitedCountries.includes(country)) {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  return (
    <>
      <h1>Countries</h1>
      <h2>All countries</h2>
      {countries ? (
        <CountriesContainer countries={countries} visitCountry={visitCountry} />
      ) : (
        <p> loading... </p>
      )}
      <h2>Visited Countries: </h2>
      <CountriesContainer countries={visitedCountries} />
    </>
  );
};

export default AllCountriesContainer;
