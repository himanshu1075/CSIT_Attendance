import React, { useState } from "react";
import "./NavigationBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import csitIcon from "../public/departmentlogo.jpg";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export const NavigationBar = () => {
    const [showMediaIcon, setShowMediaIcon] = useState(false);
    return (
        <>
            <nav className="main-nav">

                <div className="logo ">
                    <img className="NavBarImg" src={csitIcon} alt="csit logo"></img>
                </div>
                <div className={showMediaIcon ? "menu-link mobile-menu-link hover-underline-animation" : "menu-link hover-underline-animation"}>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="home#section1"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                // activeClass="active"
                                to="home#section2"
                                // spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                About Us
                            </Link>
                        </li>
                        <li>
                        <Link
                                // activeClass="active"
                                to="/api/academics"
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
                                to="home#section4"
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
                                to="home#section2"
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
                                to="home#footer"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    

                    {/* Hamburger menu code */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)} ><GiHamburgerMenu /></a>
                    </div>

                </div>
            </nav>

        </>
    )
}