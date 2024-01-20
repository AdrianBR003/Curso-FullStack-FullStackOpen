import Part from "./Part"
import Total from "./Total"

/*Usamos 'ejercicios.flat()' para extraer los valores de cada array, ya que estamos 
pasando un array de arrays de partes con el contenido*/

const Content = ({ parts }) =>{
    console.log("Content parts", parts)
    const titulos = parts.map(parts => parts.name)
    console.log("titulos", titulos)
    const ejercicios = parts.map(parts => parts.exercises)
    console.log("ejercicios", ejercicios)
    return <>
    <Part titulos={titulos} ejercicios={ejercicios}/>
    <Total ejercicios={ejercicios.flat()}/>
    </>
 }

export default Content