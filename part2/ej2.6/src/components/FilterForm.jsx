const FilterForm = ({ filterLetters, handleFilterChange }) => {
  return (
    <form>
      <h2>Phonebook</h2>
      <div>Filter shown with: <input value={filterLetters} onChange={handleFilterChange} /></div>
    </form>
  );
};

export default FilterForm;