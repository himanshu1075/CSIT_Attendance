import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FacultyLogin from "./FacultyLogin";
import StudentLogin from "./StudentLogin";

function Login() {
  const [selectedButton, setSelectedButton] = useState(1);

  useEffect(()=>{
    
     localStorage.removeItem('user');
     localStorage.removeItem('token');
     localStorage.removeItem('enrollment');
    
 },[])
  
  const handleButton1Click = () => {
    setSelectedButton(1);
  };

  const handleButton2Click = () => {
    setSelectedButton(0);
  };

  const renderData = () => {
    if (selectedButton === 1) {
      return <StudentLogin/>
    } else if (selectedButton === 0) {
      return <FacultyLogin/>
    }
  };

  return (
    <>
        
        <Row className={"text-center"} >
            <Col lg={3.5} className={'mt-3'}  style={{display:"flex"}}>
                <Container className="text-center"> 
                    <Button size="lg"  onClick={handleButton1Click}><h5>Login as Student</h5></Button>
                </Container>
                
                <Container>
                <Button size="lg" onClick={handleButton2Click}><h5>Login as Faculty</h5></Button>
                </Container>
                
            </Col>

        </Row>
      
      
      {renderData()}
    
    </>
  );
}

export default Login;
