const Countries = ({ filteredCountries, searchValue }) => {
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

  return (
    <>
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.alpha3code}>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
};
export default Countries;
