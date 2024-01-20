import Course from "./components/Course"

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Prueba añadir parte',
        exercises: 20, 
        id:4,
      },
    ],
  }

  console.log("app course.name", course.name)

  return <Course {...course} /> //Usamos el operador '...' para pasar las propiedades del objeto
}

export default App