import { useState } from 'react'
import FilterForm from './components/FilterForm'
import NumberList from './components/NumberList'
import AddPersonForm from './components/addPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [filterLetters, setFilterLetters] = useState(''); // Nuevo estado para las letras de filtrado

  const handlePersonChange = (event) =>{
    console.log("handleNameChange", event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) =>{
    console.log("handleNameChange", event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log("handleShowChange", event.target.value);
    setFilterLetters(event.target.value);
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().startsWith(filterLetters.toLowerCase())
  );

  const correccion = () =>{
    let bool = true
    persons.map(n=>{
      if(n.name === newName){
         bool = true
      }else{
        bool = false
      }
    });
    return bool
  }

  const addPerson = (event) => {
    event.preventDefault();
  
    if (correccion()) {
      alert(`ER: el nombre: ${newName} , ya existe`);
    } else {
      const personObject = {
        name: newName,
        number: newPhone,
      };
  
      setPersons([...persons, personObject]);
      setNewName('');
      setNewPhone('');
    }
  };

  /* const addPerson = (event) =>{
      if(correccion()){
        alert(`ER: el nombre: ${newName} , ya existe`)
      }else{
      console.log("correcion", correccion()) 
      event.preventDefault()
      const personObject={
        name : newName,
        number : newPhone,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      console.log('addPerson personObject: ', personObject)
      console.log('addPerson persons: ', persons)
      console.log('addperson number: ', number)
    }
  }  */

  return (
    <div>
      <FilterForm filterLetters={filterLetters} handleFilterChange={handleFilterChange} />
      <AddPersonForm
        newName={newName}
        newPhone={newPhone}
        handlePersonChange={handlePersonChange}
        handlePhoneChange={handlePhoneChange}
        addPerson={addPerson}
      />
      <NumberList persons={filteredPersons} />
    </div>
  );
}

export default App