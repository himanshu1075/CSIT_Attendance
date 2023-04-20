import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ThirdyearBranches() {
    return (
        
        <>
                <Row>
            
                    <Col lg={4}>
                        <Link to="#" className="decoration">
                            <Card style={{ width: "25rem", height:"20rem"}} >
                                <h4>CSIT-1</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link to="/3rdyear/csit-2/subjects" className="decoration" >
                            <Card style={{ width: "25rem", height:"20rem"}}>
                                <h4>CSIT-2</h4>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link to="#" className="decoration" style={{ width: "24rem"}}>
                            <Card style={{ width: "25rem", height:"20rem"}}>
                                <h4>CSIT-3</h4>
                            </Card>
                        </Link>
                    </Col>
                   
                </Row>
        </>

)
}
export default ThirdyearBranches;