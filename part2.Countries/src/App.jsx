import { useEffect, useState } from "react";
import { SearchFilter } from "./components/SearchFilter";
import Countries from "./components/Countries";
import countryService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      console.log("promise fulfilled");
      setCountries(initialCountries);
    });
  }, []);
  console.log("render", countries.length, "countries");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <SearchFilter handleSearch={handleSearch} />
      <Countries countries={countries} filteredCountries={filteredCountries} />
    </>
  );
};

export default App;
