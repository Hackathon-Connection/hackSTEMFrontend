
import ModuleCube from "../../atoms/module-cube/module-cube";
import "./journey-modules.css"
const JourneyModules =()=>{
    const modules =[
        {name: "Intro to Programing"},
        {name: "Eletronics"},
        {name: "Hardware"},
        {name: "Operational Systems"},
        {name: "OOP"},
        {name: "Computer Networks"},
        {name: "Web Development"},
        {name: "Security"},
        {name: "Ethical Hacking"}
       
    ]
    return(
        <>
        <div className="journey-modules-container">
            {modules.map(module =>{
                return <ModuleCube name={module.name}/>
            })}
        </div>
       
        
        </>
        
    );
}

export default JourneyModules;