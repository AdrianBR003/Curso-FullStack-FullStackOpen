const AddPersonForm = ({ newName, newPhone, handlePersonChange, handlePhoneChange, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <h2>Add a New Contact</h2>
      <div>name: <input value={newName} onChange={handlePersonChange} /></div>
      <div>phone: <input value={newPhone} onChange={handlePhoneChange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;