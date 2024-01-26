export const SearchFilter = ({ handleSearch }) => {
  return (
    <div>
      Find countries: <input onChange={handleSearch} />
    </div>
  );
};
