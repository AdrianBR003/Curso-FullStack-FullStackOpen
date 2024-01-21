import Part from "./Part"
import Total from "./Total"

/*Usamos 'ejercicios.flat()' para extraer los valores de cada array, ya que estamos 
pasando un array de arrays de partes con el contenido*/

const Content = ({ parts }) =>{
    console.log("Content parts", parts)
    const ar = parts.flat()
    const titulos = ar.map(ar => ar.name)
    console.log("Console titulos:", titulos)
    const ejercicios = ar.map(ar => ar.exercises)
    console.log("Console ejercicios: ", ejercicios)
    return <>
    <Part titulos={titulos} ejercicios={ejercicios}/>
    <Total ejercicios={ejercicios.flat()}/>
    </>
 }

export default Content