import { Col, Row } from "react-bootstrap";
import "./Home/Home.css";
import { AboutUsReadMore } from "../public/Button";


function About() {
    return (
        <>
            <Row style={{ margin: 7 }} id="home#section2">
                    <Col className="col-sm-7"  >
                        <h2 style={{fontSize:"40px"}}> <strong>About CSIT Department</strong></h2>
                        <p style={{fontSize:"12px"}}>AITR has always been at the forefront of adopting new technologies. CSIT department @ AITR has three courses those include the emerging areas as recommended by the AICTE committee. <br></br>As exponential growth in information on various platforms, future engineers must have the expertise in core computer science as well as latest technologies. It requires blending of emerging areas with core subject and therefore AICTE introduced as new branch CSIT.

The courses @ CSIT incorporate both theory and practicals/labs in the emerging areas of AI, ML, IoT, Blockchain and Data Sciences as core subjects and Quantum Computing, Virtual Reality and Cyber Security as Professional Electives. The above emerging areas have been identified by the national level committee as part of National Perspective Plan for Engineering Education and accepted by AICTE. <br></br>AICTE has also prescribed the model curriculum for the above emerging areas.

The course @ CSIT is in the AICTE nomenclature and accepted by them as equivalent to CSE and IT. The courses bring the best of both CSE and IT together. The course @ CSIT will be accepted as being similar / relevant to CSE and IT and will also be accepted for campus recruitments, not only in private companies but also in government undertakings etc. The graduates of the courses @ CSIT will be accepted even for any faculty recruitments for the departments of CSE or IT or CSIT. The graduates will also be eligible for higher education (both in India and abroad).
                        </p>
                        <a href="https://aitr.ac.in/computer-science-and-information-technology-csit/" target = "_blank"><AboutUsReadMore className="rounded">Read more</AboutUsReadMore></a>
                    </Col>
                    <Col className="col-sm-5">
                    <Col className="col-sm-1"></Col>
                        <Col className=" col-sm-11 square" style={{ background: "#002147", padding: 11, marginTop: "4px", color: "#fff", borderRadius: "21px" }}>
                            <br></br>

                            <h2 style={{ margin: "14px 10px 40px 10px", fontSize:"30px" }} className="newsHeading">News Section</h2>


                            <div className="newsContent" >
                                <a style={{ textDecoration: 'none' }} href = "https://aitr.ac.in/sports-details/" target="_blank"><div id="news1">
                                    <p className="txtDecoration" style={{ color: "#FDC800", margin: "40px 10px 7px 10px",fontSize:"15px" }}>10 April 2023</p>

                                    <div style={{ margin: "0px 10px 10px 10px", textDecoration: 'none',color: "#fff" }}>
                                        <newsSection>Annual Sports Meet 2022-23: CSIT department teams performs magnificent and won in BasketBall, Cricket, Table Tennis and VolleyBall.The Basketball team exhibited sheer brilliance on the court, while the Cricket team's batting and bowling prowess left the spectators in awe. The Table Tennis team showcased their agility and finesse, and the Volleyball team's teamwork was truly commendable.

                                        </newsSection>
                                        {/* <br /><StyledButton className="rounded" style={{ padding: "1px 1px 1px 1px", marginTop: "5px" }}>Read more</StyledButton> */}
                                    </div>
                                </div> </a>
                                
                                <div id="news2">
                                <p style={{ color: "#FDC800", margin: "40px 10px 7px 10px",fontSize:"15px" }}>27 June 2023</p>

                                <a >
                                <div style={{ margin: "0px 10px 10px 10px", textDecoration: 'none',color: "#fff" }}>
                                    <newsSection>Rupak Korde of batch 2019-23 got selected in Juspay as a Assosiate Software Development Engineer. </newsSection>
                                    {/* <br /><StyledButton className="rounded" style={{ padding: "1px 1px 1px 1px", marginTop: "5px" }}>Read more</StyledButton><br /> */} <br />
                                    <br /> <br /></div></a> <a style={{ textDecoration: 'none',color: "#fff" }} href = "https://timesofindia.indiatimes.com/entertainment/events/indore/acropolis-group-celebrates-annual-fest-with-zeal-and-zest/articleshow/74438222.cms" target="_blank"><newsSection id="section3">See All News</newsSection><strong style={{ color: "#fdc800" }}> &gt;</strong></a>
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