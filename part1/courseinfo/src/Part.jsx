const Part = (props) =>{
    console.log("Part " + " "+ props.name +" "+ props.exercises)
return <>   
    <p>Nombre: {props.name} -- Nº Ejercicios: {props.exercises}</p>
</>
}

export default Part

