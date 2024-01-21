import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({name, parts}) =>{

    return <>
    <Header titulo={name}/>
    <Content parts={parts} />
    <Total /> 
    </>
}


export default Course