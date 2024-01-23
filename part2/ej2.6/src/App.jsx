import { useState } from 'react'
import Note from "./components/Note"
import { number } from 'prop-types'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handlePersonChange = (event) =>{
    console.log("handleNameChange", event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) =>{
    console.log("handleNameChange", event.target.value)
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) =>{
    console.log("handleShowChange", event.target.value)
    setShowAll(event.target.value)
  }


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

  const addPerson = (event) =>{
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
  } 

  const filter = (event) =>{
    
  }



  return (
    <div>
      <form onSubmit={showAll}>
        <h2>Phonebook</h2>
        <div>Filter shown with: <input value={} onChange={}/></div>
      </form>
      <form onSubmit={addPerson}>
        <h2>Add a New Contact</h2>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>phone: <input value={newPhone} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(n => <Note key={n.name} note={n} number={n.number}/>)}
      </ul>
    </div>
  )
}

export default App