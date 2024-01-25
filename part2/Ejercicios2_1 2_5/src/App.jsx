import Recorrer from "./components/Recorrer"



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: 'Prueba',
      id: 3,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  /* const nuevoA = courses.map((c) => { //Comprobacion de como se recorre
    console.log("c", c); 
    console.log("c.name", c.name);
    // Puedes realizar operaciones adicionales si es necesario

    // Devolver el nuevo valor para que se almacene en el nuevo array
    return c;
});
*/


return <Recorrer courses={courses} />

} 

export default App