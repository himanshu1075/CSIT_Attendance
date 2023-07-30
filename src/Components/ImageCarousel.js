import "./ImageCarousel.css";
import { Carousel } from "react-bootstrap";
import botathonWinner from './Home/botathonWinner.jpg'
import iotCompetitionWinner from './Home/iotCompetitionWinner.jpg'


export default function ImageCarousel() {
    return (
        
            <Carousel fade interval={3000} >
                <Carousel.Item >
                    <img
                        className="carousel d-block H"
                        src={botathonWinner}
                        alt="ACRO Botathon 2022 Winners"
                    />
                    <Carousel.Caption className="CarouselBg" style={{ color: "#fdc800,delay(500)" }}>
                        <h3>ACRO Botathon 2022 Winners</h3>
                        <p>Acro Botathon 2022 concluded successfully and Team Hustler Won the first price with members Jaydeep and Kunal of CSIT-2 2020-2024</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carousel d-block "
                        src={iotCompetitionWinner}
                        alt="IoT Competetion Participants"
                    />

                    <Carousel.Caption className="CarouselBg">
                        <h3>IoT Competetion held by IT Department</h3>
                        <p>Students from CSIT participated in the IoT competetion held by IT department and the first runners up is Team Hustlers with Jaydeep and Kunal.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        
    );
}