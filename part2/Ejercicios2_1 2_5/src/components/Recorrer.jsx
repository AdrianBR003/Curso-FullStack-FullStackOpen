import Course from "./Course"

const Funcion = ({ courses }) => {
    console.log("Funcion courses:", courses)
    const courseComponents = courses.map((e) => {
      console.log("App e.name", e.name);
      console.log("App e.id", e.id);
      console.log("App e.parts", e.parts);
      return <Course key={e.id} name={e.name} id={e.id} parts={e.parts} />;
    });
  
    return courseComponents;
  };
  
  export default Funcion;
  