
import "./Academics.css"

import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import StyledButton from "../public/Button";
import { Card, Col, Container, Row } from "react-bootstrap";
function FacultyAcademics() {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])

    return (
        
                <>
                        <Row>
                    
                            <Col lg={4}>
                                <Link to="#" className="decoration">
                                    <Card style={{ width: "24rem", height:"20rem"}} >
                                        <h4>2nd Year</h4>
                                    </Card>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="/3rdyear/branches" className="decoration" >
                                    <Card style={{ width: "24rem", height:"20rem"}}>
                                        <h4>3rd Year</h4>
                                    </Card>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="#" className="decoration" style={{ width: "24rem"}}>
                                    <Card style={{ width: "24rem", height:"20rem"}}>
                                        <h4>4th Year</h4>
                                    </Card>
                                </Link>
                            </Col>
                           
                        </Row>

                </>
  
    )
}
export default FacultyAcademics;