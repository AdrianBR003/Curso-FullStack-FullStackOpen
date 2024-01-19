import {useState} from 'react';
import Random from './Random';
import Puntuacion from './Puntuacion';
import Mayor from './Mayor'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0); //Usamos el useState para guardar el valor en el renderizado y que no se reinicie
  const [ary, setAry] = useState(new Uint8Array(anecdotes.length))

  const guardar = (ary, selected) => {
    console.log('guardar iniciado')
    console.log('selected', selected)
    console.log('Ary', ary)
    const newArray = ary.slice(); 
    newArray[selected] = Puntuacion(newArray[selected])
    console.log('New Array[selected]', newArray[selected])
    setAry(newArray); 
    console.log('N Ary', ary)
  }

  const setToValue = () => {
    const newValue = Random(0, anecdotes.length-1);
    console.log('value now', newValue);
    setSelected(newValue);
  };

  //Array Puntuacion


  console.log('select', selected);

  return (
    <div>
      <h1>Anecdota</h1>
      <p>{anecdotes[selected]}</p>
      <p>Tiene {ary[selected]} votos</p>
      <button onClick={()=>setToValue()}>Siguiente Anecdota</button>
      <button onClick={()=> guardar(ary,selected)}>Votar</button>
      <Mayor ary={ary} anecdotes={anecdotes}/>
    </div>
  );
};

export default App;
