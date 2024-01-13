import Part from "./Part"

const Content = (prompt) =>{
    console.log(prompt)
return <>
    <Part numero={prompt.numero} name={prompt.part} exercises={prompt.exercises}/>
</> 
}

export default Content
