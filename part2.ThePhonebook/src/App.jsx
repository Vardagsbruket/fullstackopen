import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services/persons";
import notes from "../../part2.Notes/src/services/notes";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = filteredPersons.some(
      (person) => person.name === newName
    );
    console.log("Before addPerson - persons:", persons);
    if (nameExists) {
      const confirmed = window.confirm(
        `${newName} is already added to the phonebook, replace old number with the new number?`
      );
      if (confirmed) {
        const existingPerson = filteredPersons.find(
          (person) => person.name === newName
        );
        const updatedPerson = { ...existingPerson, number: newNumber };

        personService
          .update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setSuccessMessage(`Updated ${newName}'s number.`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 3000);
          })
          .catch((error) => {
            console.error("Error updating number:", error);
            setErrorMessage(`'${newName}' was already removed from server`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService.create(personObject).then((returnedPerson) => {
        console.log("Returned Person:", returnedPerson);
        setPersons((prevPersons) => prevPersons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setSuccessMessage(`Added ${newName} to the phonebook.`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      });
    }

    console.log("After addPerson - persons:", persons);
  };

  const deletePerson = (id) => {
    personService.deletePerson(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>The Phonebook</h1>
      <Notification message={successMessage} errorMessage={errorMessage} />

      <Filter handleSearch={handleSearch} />

      <h3>Add a new person</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
