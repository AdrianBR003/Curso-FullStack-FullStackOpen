import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const parts =[
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7 
    },
    {
      name: 'State of a Component',
      exercises: 14
    }
]

console.log(parts[0]['name'])

  return (
    <div>
        <Header course={course} />
        <Content parts={parts[0]} /> 
        <Content parts={parts[1]} />
        <Content parts={parts[2]}/>
        <Total parts={parts} /> 
    </div>
  )
}

export default App