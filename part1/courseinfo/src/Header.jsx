/*NOTAS: 
    1. nCurso es un prompt que utilizaremos para generalizar el componente
    2. <> y </> se les llama fragment, y los usamos en lugar de las etiquetas html para devolver un bloque de datos por return
*/

const Header = (prompt) =>{
    console.log(prompt.course)
    return<>
        <h1>Nombre del curso: {prompt.course}</h1>    
    </>
}

export default Header