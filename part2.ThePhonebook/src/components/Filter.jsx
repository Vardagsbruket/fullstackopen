export const Filter = ({ handleSearch }) => {
  return (
    <div>
      Search phonebook: <input onChange={handleSearch} />
    </div>
  );
};
