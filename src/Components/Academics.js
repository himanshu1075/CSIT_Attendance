
import "./Academics.css"
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import StudentAcademics from "./StudentAcademics";
import FacultyAcademics from "./FacultyAcademics";
function Academics() {
    const navigate = useNavigate();
    
    const [data, setData] = useState([])
    
    useEffect(()=>{
        if(!localStorage.getItem('token')) {
            navigate('/login')
        }
        else if(localStorage.getItem('user')==="student") {
            
           navigate('/student/academics')
        }
        else if(localStorage.getItem('user')==="faculty") {
            navigate('/faculty/academics')
        }
        
    },[])
    
    // return (
    //     <div class className="flex">
    //         {
                
    //             data.map((academicItem, AcademicIndex) => {
    //                 return(
    //                     <div className="card flex">
    //                         <div className="title">{academicItem?.title}</div>
    //                         <div className="desc">{academicItem?.description}</div>                            
    //                     </div>
    //                 )
    //             }) 
    //         }
    //     </div>
    // )
}
export default Academics;