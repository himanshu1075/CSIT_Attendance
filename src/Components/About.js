import { Col, Row } from "react-bootstrap";
import "./Home/Home.css";
import { AboutUsReadMore } from "../public/Button";


function About() {
    return (
        <>
            <Row style={{ margin: 7 }} id="home#section2">
                    <Col className="col-sm-7"  >
                        <h2 style={{fontSize:"40px"}}> <strong>About CSIT Department</strong></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            <br />
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <AboutUsReadMore className="rounded">Read more</AboutUsReadMore>
                    </Col>
                    <Col className="col-sm-5">
                    <Col className="col-sm-1"></Col>
                        <Col className=" col-sm-11 square" style={{ background: "#002147", padding: 11, marginTop: "4px", color: "#fff", borderRadius: "21px" }}>
                            <br></br>

                            <h2 style={{ margin: "14px 10px 40px 10px", fontSize:"30px" }} className="newsHeading">News Section</h2>


                            <div className="newsContent">
                                <div id="news1">
                                    <p style={{ color: "#FDC800", margin: "40px 10px 7px 10px",fontSize:"15px" }}>15feb2023</p>

                                    <div style={{ margin: "0px 10px 10px 10px" }}>
                                        <newsSection>gdfgij dfgdfg dfgn dfgdg sdfgdfg gdfgdfg dgdg dwgdsfg sdg dfg gd dfssdf ghdfs gsdg dg dfgs hs h</newsSection>
                                        {/* <br /><StyledButton className="rounded" style={{ padding: "1px 1px 1px 1px", marginTop: "5px" }}>Read more</StyledButton> */}
                                    </div>
                                </div>
                                <br />
                                <div id="news2"></div>
                                <p style={{ color: "#FDC800", margin: "40px 10px 7px 10px",fontSize:"15px" }}>15feb2023</p>

                                <div style={{ margin: "0px 10px 10px 10px" }}>
                                    <newsSection>gdfgij dfgdfg dfgn dfgdg sdfgdfg gdfgdfg dgdg dwgdsfg sdg dfg gd dfssdf ghdfs gsdg dg dfgs hs h</newsSection>
                                    {/* <br /><StyledButton className="rounded" style={{ padding: "1px 1px 1px 1px", marginTop: "5px" }}>Read more</StyledButton><br /> */} <br />
                                    <br /> <br />   <newsSection id="section3">See All News</newsSection><strong style={{ color: "#fdc800" }}> &gt;</strong>
                                    <br /><br />
                                </div>
                            </div>
                        </Col>
                        
                    </Col>
                </Row>
        </>
    )
}
export default About;