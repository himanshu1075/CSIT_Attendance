import { Col, Container, Row } from "react-bootstrap";
import bestFaculties from './Home/faculties.jpg'
import agile from './Home/agile.jpg'
import bestPlacements from './Home/placements.jpeg'
import './WhyChooseUs.css'; // Create a separate CSS file for styling

export default function WhyChooseUs() {
  return (
    <div className="WhyChooseUs" id="section4">
      <br />
      <Container style={{ margin: "5rem", display: "flex",justifyContent: "center"  }}>
        <h2 ><strong>Why Choose Us ?</strong></h2>
      </Container>
      <br/>
      <Row className="imageBox">
        <Col className="col-sm-4 ChooseUsReasons">
        <a href="https://online.fliphtml5.com/pcafe/cbav/#p=12" style={{textDecoration:'none', color: '#000'}}  target="blank">
          <img
            src={agile}
            className="image"
            alt="Agile"
          />
          </a>
          
          <h5><strong>Agile Based Learning Platform</strong></h5>
        </Col>

        <Col className="col-sm-4 ChooseUsReasons">
        <a href="https://online.fliphtml5.com/pcafe/cbav/#p=46" style={{textDecoration:'none', color: '#000'}}  target="blank">
          <img
            src={bestPlacements}
            className="image"
            alt="Placements"
          />
         </a> 
          <h5><strong>Good Placements</strong></h5>
        </Col>

        <Col className="col-sm-4 ChooseUsReasons">
        <a href="https://online.fliphtml5.com/pcafe/cbav/#p=3" style={{textDecoration:'none', color: '#000'}}  target="blank">
          <img
            src={bestFaculties}
            className="image"
            alt="Faculties"
          />
          </a>
          <h5><strong>Best Faculties</strong></h5>
        </Col>
      </Row>
    </div>
  );
}
