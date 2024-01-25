import { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import NumberList from './components/NumberList'
import AddPersonForm from './components/addPerson'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [filterLetters, setFilterLetters] = useState(''); // Nuevo estado para las letras de filtrado

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])



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