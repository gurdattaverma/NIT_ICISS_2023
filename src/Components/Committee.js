import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Committee = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col >
                    <Row className="homeabout justify_content_center">Organizing Committee</Row>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Patron</Row>
                    <ul className="commiteemembername " type="square">
                    <li className="mt-2"><b>AB Soni</b>, <i>Director, NIT Raipur, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Advisory Steering Committee</Row>
                    <ul className="commiteemembername " type="square">
                        <li className="mt-2"><b> Venu Govindaraju</b>, <i>Univ of Buffalo </i></li>
                        <li className="mt-2"><b> Sushil Jajodia</b>, <i>George Mason Univ</i></li>
                        <li className="mt-2"><b> Somesh Jha</b>, <i>Univ of Wisconsin</i></li>
                        <li className="mt-2"><b> Atul Prakash</b>, <i> Univ of Michigan</i></li>
                        <li className="mt-2"><b> Pierangela Samarati</b>, <i>University of Milan, Italy</i></li>
                        <li className="mt-2"><b> R.K. Shyamasundar</b>, <i>IIT Bombay, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">General Chair </Row>
                    <ul className="commiteemembername " type="square">
                        <li className="mt-2"><b> R.K. Shyamasundar</b>, <i>IIT Bombay, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Technical Program Chairs</Row>
                    <ul className="commiteemembername " type="square">
                        <li className="mt-2"><b>V Muthukkumarasamy</b>, <i>Griffith Univ</i></li>
                        <li className="mt-2"><b>Sithu D Sudarsan</b>, <i>CDAC</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Organising Executive   Committee</Row>
                    <ul className="commiteemembername " type="square">
                        <li className="mt-2"><b>Venkata Badarla</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b>Neminath Hubbali</b>, <i>IIT Indore, India</i></li>
                        <li className="mt-2"><b>Chandrashekar Jatoth</b>, <i>NIT Raipur, India</i></li>
                        <li className="mt-2"><b>Jayaprakash Kar</b>, <i>LNMIIT</i></li>
                        <li className="mt-2"><b>Vishwas Patil</b>, <i>IIT Bombay, India</i></li>
                        <li className="mt-2"><b>Somnath Tripathy</b>, <i>IIT Patna, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            {/* <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Patron</Row>
                    <ul className="commiteemembername " type="square">
                        <li className="mt-2"><b>AB Soni</b>, <i>Director, NIT Raipur, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row> */}

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Organizing Chair</Row>
                    <ul className="commiteemembername " type="square">
                    <li className="mt-2"><b>Chandrashekar Jatoth</b>, <i>NIT Raipur, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Tutorial, PhD Forum Chairs</Row>
                    <ul className="commiteemembername " type="square">
                        <li className="mt-2"><b>Shachee Mishra</b>, <i>IBM Research</i></li>
                        <li className="mt-2"><b>Vishwas Patil</b>, <i>IIT Bombay, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Demo/Industry Track Chairs</Row>
                    <ul className="commiteemembername " type="square">
                        <li className="mt-2"><b>Praveen Gauravaram</b>, <i>TCS</i></li>
                        <li className="mt-2"><b>Amrendra Kumar</b>, <i>DRDO</i></li>
                        <li className="mt-2"><b>Vinod Panicker</b>, <i>Wipro</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Publicity Chairs</Row>
                    <ul className="commiteemembername " type="square">
                    <li className="mt-2"><b>Vishwas Patil</b>, <i>IIT Bombay, India</i></li>
                    <li className="mt-2"><b>Balaji Rajendran</b>, <i>CDAC</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-4">
                <Col xs={1}></Col>
                <Col>
                    <Row className="footerborder"></Row>
                    <Row className="footercopyright justify_content_center mt-3">
                        Copyright @ 2023
                    </Row>
                    <a href="http://nitrr.ac.in/index.php" target="_blank">
                        <Row className="footerintitutename justify_content_center mt-2 mb-3">
                            National Institute of Technology Raipur
                        </Row>
                    </a>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </>
    )
}

export default Committee