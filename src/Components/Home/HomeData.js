import StyledButton, { AboutUsReadMore, ImageStyle, NavButton } from "../../public/Button"
import "./Home.css"
import csitIcon from "./departmentlogo.jpg"
import botathonWinner from './botathonWinner.jpg'
import iotCompetitionWinner from './iotCompetitionWinner.jpg'
import collegeIcon from "../../public/collegeLogo.webp";
import bestFaculties from './faculties.jpg'
import agile from './agile.jpg'
import bestPlacements from './placements.jpeg'

import { Carousel, Col, Container, Row } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar"



export function HomeData() {
    return (
        <>
            
            <hr></hr>

            {/* <div className="container NavBar-Container">
                <div className="row" style={{ position: "relative", marginBottom: 0 }}>
                    <div className="col-sm-2" >
                        <div className="DepartmentIcon">
                            <a className="dark-logo" href="#" >
                                
                                <ImageStyle src={csitIcon} style={{ position: "absolute" }}></ImageStyle>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-sm-10">
                        <NavButton>HOME</NavButton>
                        <NavButton>ABOUT US</NavButton>
                        <NavButton>ACADEMICS</NavButton>
                        <NavButton>PLACEMENTS</NavButton>
                        <NavButton>EVENTS</NavButton>
                        <NavButton>CONTACT US</NavButton>

                    </div>
                </div>
                <br></br>
            </div> */}
            {/* <NavigationBar></NavigationBar> */}


            <Carousel fade interval={3000} >
                <Carousel.Item >
                    <img
                        className="carousel d-block H"
                        src={botathonWinner}
                        alt="First slide"
                    />
                    <Carousel.Caption className="CarouselBg" style={{ color: "#fdc800,delay(500)" }}>
                        <h3>First slide</h3>
                        <p>Description about slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img className="carousel d-block w-100" style={{width:"1280px",height:"714px"}} src={roomwali1} alt="botathon"></img>

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        className="carousel d-block "
                        src={iotCompetitionWinner}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="CarouselBg">
                        <h3>Second slide</h3>
                        <p>Description about slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <br />
            <div className="AboutUs" id="section2">
                <Row style={{ margin: 7 }}>
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
            </div>
            <div className="WhyChooseUs" id="section4" style={{ background: "#fdc800", marginTop: "-4%", marginBottom: "100px" }}>
                <br></br>
                <Container style={{ textAlign: "center", margin: "5%" }}>
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
                        <div className="middle">
                            <div className="text">

                            </div>
                        </div>
                        <h5 style={{ textAlign:"center"}}><strong>Agile Based Learning Platform</strong></h5>
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
                        <h5 style={{ textAlign:"center" }}><strong>Best Faculties</strong></h5>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>

            </div>


            <footer>
                <div className="footerPart">
                    <div className="Container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div id="text-4" className="widget">

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </footer>
        </>
    );
}
