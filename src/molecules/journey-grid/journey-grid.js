import JourneyCard from "../../atoms/journey-card/journey-card";

import "./journey-grid.css"

const JourneyGrid =()=>{
    const studentJourney =[
        {
            name:"Computer Science Journey",
            image:"https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/07/09201427/Btech-Mathematics-and-Computing.jpg",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum pulvinar sem, in feugiat sem. Duis id pharetra velit. Pellentesque non mi placerat, commodo sem eu, congue purus"
        },
        {
            name:"Physics Journey",
            image:"https://www.javelin-tech.com/blog/wp-content/uploads/2020/10/2020-10-13_0-26-17_mesh.png",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum pulvinar sem, in feugiat sem. Duis id pharetra velit. Pellentesque non mi placerat, commodo sem eu, congue purus"
        },
        {
            name:"Math Journey",
            image:"https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/11/23171108/Mathematics-and-Computing.jpg",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum pulvinar sem, in feugiat sem. Duis id pharetra velit. Pellentesque non mi placerat, commodo sem eu, congue purus"
        }
    ]
    
    return (
        <div className="journey-grid">
            {studentJourney.map(journey =>{
                return <JourneyCard name={journey.name} image={journey.image} description={journey.description}/>
            })
            }
        </div>
        
    );
}

export default JourneyGrid;