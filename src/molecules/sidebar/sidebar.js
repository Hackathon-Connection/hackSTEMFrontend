import { Typography } from "@mui/material";
import "./sidebar.css"

const SideBar =({student})=>{
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <img 
                    className="profile-pic"
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt="profile"
                />
            </div>
            <div className="sidebar-info">
                <Typography fontSize="1rem"  color="white">{student.name}</Typography>
                <Typography fontSize="1rem" color="white" >{student.school}</Typography>
            </div>
        </div>
    );
}

export default SideBar;