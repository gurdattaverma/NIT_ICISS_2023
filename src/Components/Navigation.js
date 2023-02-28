import React, { useState } from "react"
import "./Style.css"
import { Navbar, Nav, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import nitlogo from "./Images/NITRR.png"

const Navigation = () => {

    const [navfixtop, setNavfixtop] = useState(false);
    const changeNavbarosition = () => {
        if (window.scrollY >= 200) {
            setNavfixtop(true);
        }
        else {
            setNavfixtop(false);
        }
    };

    window.addEventListener('scroll', changeNavbarosition);

    return (
        <>
            <Row className="mt-3 mb-3">
                <Col xs={1}></Col>
                <Col sm={9}>
                    <Row className="confhead">ICISS 2023</Row>
                    <Row className="conftitle mt-2">19th International Conference on Information Systems Security</Row>
                    <Row className="topintitutename mt-2">NIT Raipur, India | December 16-20, 2023</Row>
                </Col>
                <Col sm>
                    <img src={nitlogo} alt="" className="nitlogo" />
                </Col>
                <Col></Col>
                <Col xs={1}></Col>
            </Row>
            <Row>
                <Navbar bg="" variant="" expand="sm" fixed="top" className={navfixtop ? 'navbg mb-5' : "navtopmargin navbg mb-5"}
                >
                    <Link to="/">
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">
                            <Link to="/" className='nav-link mt-0'>Home</Link>
                            <Link to="/History" className='nav-link mt-0'>History</Link>
                            <Link to="/Committees" className='nav-link mt-0'>Commitees</Link>
                            <Link to="/" className="nav-link navigation_dropdown mt-0" >Calls{""}
                                <div className="dropdown-content">
                                    <Link to="/Paper" className="nav-link dropdown_menu">Paper</Link>
                                    <Link to="/Industrypaper" className="nav-link">Industry Paper</Link>
                                    <Link to="/Tutorials" className="nav-link">Tutorials</Link>
                                    <Link to="/PhDForums" className="nav-link">PhD Forum</Link>
                                </div>
                            </Link>
                            <Link to="/" className="nav-link navigation_dropdown mt-0" >Papers{""}
                                <div className="dropdown-content">
                                    <Link to="/Cameraready" className="nav-link dropdown_menu">Camera-Ready</Link>
                                    <Link to="/Acceptedpaper" className="nav-link">Accepted Paper</Link>
                                </div>
                            </Link>
                            <Link to="/" className="nav-link navigation_dropdown mt-0" >Programme{""}
                                <div className="dropdown-content">
                                    <Link to="/Program" className="nav-link dropdown_menu">Main Conference</Link>
                                    <Link to="/events-tutorials" className="nav-link">Tutorials</Link>
                                    <Link to="/events-Phdforum" className="nav-link">PhD Forum</Link>
                                    <Link to="/Keynote" className="nav-link">Keynote Address</Link>
                                </div>
                            </Link>
                            <Link to="/" className="nav-link navigation_dropdown mt-0" >Attending{""}
                                <div className="dropdown-content">
                                    <Link to="/Registration" className="nav-link dropdown_menu">Registration</Link>
                                    <Link to="/Visa" className="nav-link">Visa</Link>
                                    <Link to="/Travel" className="nav-link">Travel & Venue</Link>
                                    <Link to="/Accomodation" className="nav-link">Accomodation</Link>
                                    <Link to="/Contact" className="nav-link">Contact</Link>
                                </div>
                            </Link>
                            <Link to="/" className='nav-link mt-0'>Gallery</Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>
            </Row>
        </>
    )
}

export default Navigation