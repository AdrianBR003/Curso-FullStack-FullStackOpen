import Header from './Header'
import StatisticLine  from './StatisticLine' 


const Nempty = (props) =>{
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  if(good===0 && bad===0 && neutral===0){
      return true
  }else{
      return false
  }
}

const statistics = (props) =>{
    
    console.log(props)

    const good = props.good
    console.log('good', props.good)
    const neutral = props.neutral
    console.log('neutral', props.neutral)
    const bad = props.bad
    console.log('bad', props.bad)

    if(Nempty(props)){
        return <>
            <p>No feedback given</p>
        </>
    }else{
    return <>    
        <Header text={'statistics'} />

        <table>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #000' }}>Valores</th>
          </tr>
          <tr />
        </thead>
        <tbody>
          <tr>    
            <th>Good:</th>
            <td>{good}</td>
          </tr>
          <tr>
            <th>Neutral:</th>
            <td>{neutral}</td>
          </tr>
          <tr>
            <th>Bad:</th>
            <td>{bad}</td>
          </tr>
          <StatisticLine text='All' value={[good, neutral, bad]}/>
          <StatisticLine text='Average' value={[good, neutral, bad]}/>
          <StatisticLine text='Positive' value={[good, neutral, bad]}/>
        </tbody>
        </table>

        </>
    }
}

export default statistics