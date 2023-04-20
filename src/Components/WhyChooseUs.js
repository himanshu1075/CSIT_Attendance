import { Col, Container, Row } from "react-bootstrap";
import bestFaculties from './Home/faculties.jpg'
import agile from './Home/agile.jpg'
import bestPlacements from './Home/placements.jpeg'


export default function WhyChooseUs() {
    return(
        <div className="WhyChooseUs" id="section4" style={{ background: "#fdc800", marginTop: "-4rem", marginBottom: "10rem" }}>
                <br></br>
                <Container style={{ textAlign: "center", margin: "5rem" }}>
                    <h2><strong>Why Choose Us ?</strong></h2>
                </Container>
                <br></br>
                <Row>
                    <Col className="col-sm-4 ChooseUsReasons">
                        <img src={agile} className="image" style={{
                            borderRadius: "50%", width: "25vw", height: "60vh", marginLeft: "40px", marginTop: "-10px", marginBottom: "5px", border: "7px solid", transition: ".5s ease",
                            backfaceVisibility: "hidden", display: "block"
                        }} alt="Agile">
                        </img>
                        
                        <h5 style={{ display:"flex",justifyContent:"center", textAlign:"center"}}><strong>Agile Based Learning Platform</strong></h5>
                    </Col>


                    <Col className="col-sm-4 ChooseUsReasons">
                        <img src={bestPlacements} className="image" style={{
                            borderRadius: "50%", width: "25vw", height: "60vh", marginLeft: "40px", marginTop: "-10px", marginBottom: "5px", border: "7px solid", transition: ".5s ease",
                            backfaceVisibility: "hidden", display: "block"
                        }} alt="Agile">
                        </img>
                        <div className="middle">
                            <div className="text">

                            </div>
                        </div>
                        <h5 style={{ textAlign:"center"  }}><strong>Good Placements</strong></h5>
                    </Col>


                    <Col className="col-sm-4 ChooseUsReasons">
                        <img src={bestFaculties} className="image" style={{
                            borderRadius: "50%", width: "25vw", height: "60vh", marginLeft: "40px", marginTop: "-10px", marginBottom: "5px", border: "7px solid", transition: ".5s ease",
                            backfaceVisibility: "hidden", display: "block"
                        }} alt="Agile">
                        </img>
                        <div className="middle">
                            <div className="text">

                            </div>
                        </div>
                        <h5 style={{ textAlign:"center" ,display:"flex",justifyContent:"center"}}><strong>Best Faculties</strong></h5>
                    </Col>
                </Row>

            </div>
    );
}