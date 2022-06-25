
import { Typography } from "@mui/material";
import LoginForm from "../../molecules/login-form/login-form";

import "./login.css"

const Login =()=>{
    return (
        <div className="page-container">
        <div className = 'login-container'>
            <div className="adai-info">
                <div className="adai-marketing">
                    <Typography color="white" fontSize="3rem" >ADA</Typography>
                    <Typography color="white" fontSize="1.5rem" >Knowledge in Perspective</Typography>
                </div>
                
                <img
                    className="ada-photo"
                    src="https://cdn-icons-png.flaticon.com/512/713/713291.png"
                />
            </div>
            <div className="login-form">
                <LoginForm/>
            </div>
        </div>
        </div>
    );
}

export default Login;