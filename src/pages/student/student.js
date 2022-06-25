import { Autocomplete, TextField, Typography } from "@mui/material";
import JourneyGrid from "../../molecules/journey-grid/journey-grid";
import SideBar from "../../molecules/sidebar/sidebar";

import "./student.css"

const Student =()=>{
    const journeys =[
        {label: "Chemestry", id:1},
        {label: "Eletronics", id:2},
        {label: "Materials", id:3},
    ]

    const student ={
        name: "Daniel Frank",
        school:"Escola Santa Terezinha"
    }
    return (
        <div className="student-container">

            <div className="student-sidebar">
                <SideBar student={student} />
            </div>
            

            <div className="student-content">
                <div className="student-content-title">
                    <Typography fontSize="2rem"  marginRight="2%">My Journeys</Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={journeys}
                        sx={{ width: 250, height:50 }}
                        renderInput={(params) => <TextField {...params}  value="journeys" label="Find a new journey "  />}
                    />
                </div>
                <div className="student-journeys">
                    <JourneyGrid/>
                </div>
                
            </div>
        </div>
    );
}

export default Student