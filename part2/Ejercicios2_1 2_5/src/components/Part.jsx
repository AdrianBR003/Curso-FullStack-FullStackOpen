const Parts = ({ titulos, ejercicios }) => {
    console.log("ejercicios en Parts", ejercicios);
    return titulos.map((titulo, index) => (
      <p key={index}>{titulo} : {ejercicios[index]}</p>
    ));
  };
  
  export default Parts;
  