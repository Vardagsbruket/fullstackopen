export const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button
            onClick={() => {
              if (
                window.confirm(
                  `Do you really want to delete ${person.name} from the Phonebook?`
                )
              ) {
                deletePerson(person.id);
              }
            }}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};
