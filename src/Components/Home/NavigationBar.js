import React, { useState } from "react";
import "./NavigationBar.css";
// import {FaInstagramSquare, FaLinkedinIn, FaYoutubeSquare} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImageStyle } from "../../public/Button";
import csitIcon from "./departmentlogo.jpg";
import { Link } from "react-scroll";

export const NavigationBar = () => {
    const [showMediaIcon, setShowMediaIcon] = useState(false);
    return (
        <>
            <nav className="main-nav">

                <div className="logo">
                    <ImageStyle src={csitIcon} style={{ position: "absolute" }}></ImageStyle>
                </div>
                <div className={showMediaIcon ? "menu-link mobile-menu-link hover-underline-animation" : "menu-link hover-underline-animation"}>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                About Us
                            </Link>
                        </li>
                        <li>
                        <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Academics
                            </Link>
                        </li>
                        <li>
                        <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Placements
                            </Link>
                        </li>
                        <li>
                        <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Events
                            </Link>
                        </li>
                        <li>
                        <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    {/* <ul className="social-media-desktop">
                        <li>
                            <a href="#" target="_blank">
                                <FaLinkedinIn className="Linkedin"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <FaInstagramSquare className="Instagram"/>
                            </a>                            
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <FaYoutubeSquare className="Youtube"/>
                            </a>                            
                        </li>
                    </ul> */}

                    {/* Hamburger menu code */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)} ><GiHamburgerMenu /></a>
                    </div>

                </div>
            </nav>


            {/* <section className="hero-section">
                <h1>Jay Shree Ganesh</h1>
            </section> */}


        </>
    )
}