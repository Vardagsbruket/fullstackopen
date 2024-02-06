import { useEffect, useState } from "react";
import { SearchFilter } from "./components/SearchFilter";
import Countries from "./components/Countries";
import countryService from "./services/countries";
import Notification from "./components/Notification";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      console.log("promise fulfilled");
      setCountries(initialCountries);
    });
  }, []);
  //console.log("render", countries.length, "countries");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    if (filteredCountries.length > 10) {
      setMessage(`Too many matches, please specify another letter`);
    } else {
      setMessage("");
    }
  }, [filteredCountries.length]);

  return (
    <>
      <SearchFilter handleSearch={handleSearch} />
      <Notification message={message} searchValue={searchValue} />
      <Countries
        searchValue={searchValue}
        filteredCountries={filteredCountries}
      />
    </>
  );
};

export default App;
