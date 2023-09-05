const CountryComponent = ({ country, visitCountry }) => {
  const handleClick = () => {
    visitCountry(country);
  };

  return (
    <>
      <h2>{country.name.common}:</h2>
      <ul>
        <li>Capital: {country.capital}</li>
        <li>Population: {country.population}</li>
        <li>Capital: {country.capital}</li>
      </ul>
      {visitCountry ? <button onClick={handleClick}>Visited</button> : null}
    </>
  );
};

export default CountryComponent;
