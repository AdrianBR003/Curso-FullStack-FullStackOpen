/* NOTAS: 
  1. Todas las etiquetas deben de estar cerradas de una forma u otra
  2. REACT no puede renderizar inmediatamente OBJETOS, de ahí que muchas veces aparezca el error -> 'are not valid as a React child'

*/ 
const Hello = (props) =>{

  return(
    <div>
      <p>Hello World! {props.name}</p>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <Hello />
      <br />
      <p>{friends[0].name}</p>
    </div>
  )
} 

export default App