import { useState } from "react";

const Countries = ({ filteredCountries, searchValue }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (searchValue === null || searchValue === "") {
    return null;
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    const languages = Object.entries(country.languages).map(([code, name]) => (
      <li key={code}>{name}</li>
    ));
    const flag = <img src={country.flags.png} alt={country.flags.alt} />;
    return (
      <>
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area}</p>
          <h3>Languages:</h3>
          <ul>{languages}</ul>
          {flag}
        </div>
      </>
    );
  }

  if (filteredCountries.length > 10) {
    return null; // Return null if more than 10 countries
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.alpha3code}>
            {country.name.common}{" "}
            <button onClick={() => handleShowCountry(country)}>show</button>{" "}
          </li>
        ))}
      </ul>
      {selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Area: {selectedCountry.area}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.entries(selectedCountry.languages).map(
              ([code, language]) => (
                <li key={code}>{language}</li>
              )
            )}
          </ul>
          <img src={selectedCountry.flags.png} alt="Flag" />
        </div>
      )}
    </>
  );
};
export default Countries;
