import Note from './Note';

const NumberList = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <Note key={person.name} note={person} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default NumberList;