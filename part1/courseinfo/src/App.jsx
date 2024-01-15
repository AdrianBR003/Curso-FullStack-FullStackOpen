import { useState } from 'react'

const Display = ( {counter} ) =>{
  return(
    <div>{counter}</div>
  )
}

const Button = ( {handleClick, text} ) =>( <button onClick={handleClick}>{text}</button> )

const App = () => {

  const [ counter, setCounter ] = useState(0) //useState es una funcion que avanza el estado de la aplicacion
  console.log('rendering with counter value', counter)

  const increaseByOne = () => setCounter(counter + 1)
  console.log('increasing, value before', counter)
  const decreaseByOne = () => setCounter(counter -1)
  console.log('decreasing, value before',counter)
  const setToZero = () => setCounter(0)
  console.log('resetting to zero, value before', counter)

  return (<>
    <Display counter={counter} />
    <Button handleClick={increaseByOne} text={'increase'}/>
    <Button handleClick={decreaseByOne} text={'decrease'}/> 
    <Button handleClick={setToZero} text={'Zero'}/> 
    </>
  )
}

export default App