import PropTypes from 'prop-types';

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

const StatisticLine = (props) => {

    const good = props.value[0]
    const neutral = props.value[1]
    const bad = props.value[2]

    console.log('good', good)
    console.log('neutral', neutral)
    console.log('bad', bad)

    const all = good + neutral + bad
    const average = (good + bad)/all
    const positive = (good/all)*100

    console.log('all', all)
    console.log('average', average)
    console.log('positive', positive)

    if(Nempty(props)){
        return <>
        </>
    }else if(props.text==='All'){
        return <>
        <tr>
          <th>{props.text}:</th>
          <td>{all}</td>
        </tr>
        </>
        
    }else if(props.text==='Average'){
        return <> 
        <tr>
          <th>{props.text}:</th>
          <td>{average}</td>
        </tr>
        </>
    }else if(props.text==='Positive'){
        return <>
         <tr>
          <th>{props.text}:</th>
          <td>{positive}</td>
        </tr>
        </>
    }else{
        console.log('Ha ocurrido un error en StatisticsLine')
    }
    
}

StatisticLine.propTypes = {
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
    text: PropTypes.string.isRequired
};

export default StatisticLine