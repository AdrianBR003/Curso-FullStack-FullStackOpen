import { useState } from 'react'

/*
const Display = ( {counter} ) =>{
  return(
    <div>{counter}</div>
  )
}
*/
const Button = ( {handleClick, text} ) =>( <button onClick={handleClick}>{text}</button> )


const History = (props) => {
  if(props.allClicks.length === 0){
    return(<div>
      the app is used by pressing the buttons
    </div>
    )
  }
  return(<div>
      button press History: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([]) //Inicializa con la matriz vacia
  const [cont, setCont] = useState(0) //Nos informa sobre el numero de veces que pulsamos los botones

  const handleLeftClick = () =>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
    setCont(cont+1)
  }

  const handleRightClick = () =>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
    setCont(cont+1)
  }

  return (<>
    {left}
    <Button handleClick={handleLeftClick} text='left'/>
    <Button handleClick={handleRightClick} text='right'/>
    {right}
    <br /> 
    <br />
    <History allClicks={allClicks} /> 
    <p>Contado de Pulsaciones: {cont}</p>
    </>
  )
}

export default App