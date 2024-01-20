import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({id, name, parts}) =>{
    console.log("id Course", id)
    console.log("Course parts", parts)
    return <>
    <Header titulo={name}/>
    <Content parts={parts} />
    <Total /> 
    </>
}


export default Course