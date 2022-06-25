import { Typography } from "@mui/material";
import Cube from "react-3d-cube";
import "./module-cube.css"
const ModuleCube =({name})=>{
    return(
        <div className="module-cube-container">
        <center className="cube-container">
            <div
            style={{
                width: 100,
                height: 100
            }}
            >
            <Cube size={100} index="front" />
            </div>
        </center>
        <Typography marginBottom="2rem">{name}</Typography>
       
      </div>
    );
}

export default ModuleCube;