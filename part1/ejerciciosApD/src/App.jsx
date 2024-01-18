import { useState } from 'react'
import Header from './Header'
import Statistics from './Statistics'
import Button from './Button'



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('app good', good)
  console.log('app setGood', setGood)

  const increasedByOne = (stat, setStat) =>{setStat(stat+1)}

  return (<>
      <Header text={'give feedback'} />
      <Button onClick={() => increasedByOne(good, setGood)} text={'Good'} />
      <Button onClick={() => increasedByOne(neutral, setNeutral)} text={'Neutral'} />
      <Button onClick={() => increasedByOne(bad, setBad)} text={'Bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
  </>
  )
}

export default App