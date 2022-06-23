import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Login from './login';
import Student from './student';
import Teacher from './teacher';

const Pages = () => {
    return(
        <Routes>
            <Route exact path="/" element= {<Login />} />
            <Route exact path="/student" element= {<Student />} />
            <Route exact path="/teacher" element= {<Teacher />} />
        </Routes>
        
    
    );
};
export default Pages;