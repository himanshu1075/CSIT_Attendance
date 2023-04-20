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
                        alt="First slide"
                    />
                    <Carousel.Caption className="CarouselBg" style={{ color: "#fdc800,delay(500)" }}>
                        <h3>First slide</h3>
                        <p>Description about slide</p>
                    </Carousel.Caption>
                </Carousel.Item>

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
        
    );
}