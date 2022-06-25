import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Journey from './journey/journey';
import Login from './login/login';
import Student from './student/student';
import Teacher from './teacher';

const Pages = () => {
    return(
        <Routes>
            <Route exact path="/" element= {<Login />} />
            <Route exact path="/student" element= {<Student />} />
            <Route exact path="/journey" element= {<Journey />} />
            <Route exact path="/teacher" element= {<Teacher />} />
        </Routes>
        
    
    );
};
export default Pages;