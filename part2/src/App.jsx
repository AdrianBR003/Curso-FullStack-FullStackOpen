import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Note from './components/Note'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const noteToShow = showAll
  ? notes 
  : notes.filter(note => note.important) // const result = condition ? val1 : val2 -> result será igual a val1 si se cumple la condition , sino será val2 

  const addNote = (event) => {
    event.preventDefault()
    const noteObjetct = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObjetct))
    setNewNote('')

    console.log('button clicked', event.target)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }



  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {noteToShow.map( //NOTA: No utilizar notes.map((note, i))... para declarar la clave.
          note =>(
            <Note key={notes.id} note={note}/> // KEY !!
          )
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
        value={newNote} //Introducimos el valor 
        onChange={handleNoteChange} //Cambia el valor de 'newNote' por el del nuevo valor 
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App notes={notes} />);

export default App 
