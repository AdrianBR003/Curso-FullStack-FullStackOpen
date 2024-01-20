const sum = ({ array }) => {
    const suma = array.map((v) => v).reduce((a, v) => a + v, 0);
    return suma;
  };

  const Total = ({ ejercicios }) => {
    console.log("ejercicios en Total", ejercicios);
  
    if (!ejercicios) { //Practicamente nunca ocurre, pero así evitamos que explote el programa porque al recorrerlo peta
      return 
    }
  
    const total = sum({ array: ejercicios });
    return <p>Total ejercicios: {total}</p>;
  };

  export default Total
  
