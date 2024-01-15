import Part from "./Part"

const Content = (props) =>{
   // console.log("props= " + props[0][name])
    const { parts } = props; 
    console.log("parts= " + parts['name'])

return <>    
    <Part name={parts['name']} exercises={parts['exercises']}/> 
</> 
}

export default Content
