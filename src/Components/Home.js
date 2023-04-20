import "./Home/Home.css";

import ImageCarousel from "./ImageCarousel";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";



export function Home() {
    return (
        <>
            
            <ImageCarousel/>
            <br />
            <div id="section2"><About/></div>
            
            <div id="section4"><WhyChooseUs/></div>

            <div className="footerPart" id="footer" style={{marginTop:"-10rem"}}></div>
            
        </>
    );
}

export default Home;