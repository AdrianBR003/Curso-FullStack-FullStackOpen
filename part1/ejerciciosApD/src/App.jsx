import { useState } from 'react'
import Header from './Header'

const porcen = (props) =>{
  if(isNaN(props)){
    return 0
  }else{
    return props
  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increasedByOne = (stat, setStat) =>{setStat(stat+1)}

  const all = good+bad+neutral
  const average = (good-bad)/all
  const positive = (good/all)*100

  return (<>
      <Header text={'give feedback'} />
      <button onClick={() => increasedByOne(good, setGood)}>Good</button>
      <button onClick={() => increasedByOne(neutral, setNeutral)}>Neutral</button>
      <button onClick={() => increasedByOne(bad, setBad)}>Bad </button>
      <Header text={'statistics'} />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All ({all})</p>
      <p>Average {porcen(average)}</p>
      <p>Positive {porcen(positive)} %</p>

  </>
  )
}

export default App