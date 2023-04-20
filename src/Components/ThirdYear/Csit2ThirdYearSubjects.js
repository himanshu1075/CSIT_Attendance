import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Csit2ThirdYearSubjects() {
    return (
        
        <>
                <Row >
                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/ML" className="decoration text-center">
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}} >
                                <h4><p>Machine Learning</p></h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/SEA" className="decoration text-center" >
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}}>
                                <h4>Software Enginnering And Agile</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/CGMM" className="decoration text-center" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem" }}>
                                <h4>Computer Graphics And Multimedia</h4>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/CNS" className="decoration text-center" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}}>
                                <h4>Cryptography And Network Security</h4>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/PythonLab" className="decoration text-center" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}}>
                                <h4>Python Programming Lab</h4>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/MinorProject" className="decoration text-center" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}}>
                                <h4>Minor Project Lab</h4>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/AndroidLab" className="decoration text-center" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}}>
                                <h4>Android Programming Lab</h4>
                            </Card>
                        </Link>
                    </Col>

                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/MLLab" className="decoration text-center" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}}>
                                <h4>Machine Learning Lab</h4>
                            </Card>
                        </Link>
                    </Col>
                    
                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects/SEALab" className="decoration text-center" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem", padding:"2rem"}}>
                                <h4>Software Engineering And Agile Lab</h4>
                            </Card>
                        </Link>
                    </Col>
                    
                    
                   
                </Row>
                
        </>

)
}
export default Csit2ThirdYearSubjects;