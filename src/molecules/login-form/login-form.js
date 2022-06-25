import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../login-form/loginForm.css";

const LoginForm = ()=>{
    const schools =[
        {label: "Colégio Estadual do Maranhão", id:1},
        {label: "Instituto Federal do Piauí", id:2},
        {label: "Escola Santa Terezinha", id:3},
    ]

    const [formData, setFormData] = useState("")
    const navigate = useNavigate()

    const handleChangeAutoComplete = (e) => {
        setFormData({
          ...formData,
            school:{
                name: e.label, 
                id: e.id
            }
        });
      };

    const handleChange = (e) => {
        setFormData({
          ...formData,
            
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
      };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something

        navigate('/student')
      };

 
    return(
        <Box
            className="form-container"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '40ch' },
              }}
        >
            <Typography className="title" fontSize={"2rem"} color="white">Login</Typography>
          
            {/*School */}
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={schools}
                onChange={(event, value) => handleChangeAutoComplete(value)} 
                renderInput={(params) => <TextField required {...params}  value="school" label="School"  />}
            />

            {/*email */}
            <TextField required  name="email" label="Email" variant="outlined" type="email" onChange={handleChange} />

            {/*Password */}
            <TextField required name="password" label="Password" variant="outlined"  type="password" onChange={handleChange} />
            
            <Button 
              style={{
                  backgroundColor: "#414770",
              }}
              className="button" 
              variant="contained" 
              type="submit" 
              onClick={handleSubmit}>Sign In</Button>
        

        </Box>
    );
}

export default LoginForm;