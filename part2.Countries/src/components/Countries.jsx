const Countries = ({ filteredCountries, searchValue }) => {
  if (searchValue === null || searchValue === "") {
    return null;
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
