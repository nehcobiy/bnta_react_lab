import CountryComponent from "../components/CountryComponent";

const CountriesContainer = ({ countries, visitCountry }) => {
  console.log(countries);
  const mappedCountries = countries.map((country) => {
    console.log(country);
    return <CountryComponent country={country} visitCountry={visitCountry} />;
  });

  return <>{mappedCountries}</>;
};

export default CountriesContainer;
