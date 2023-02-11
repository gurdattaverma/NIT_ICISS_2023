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
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b> K. N. Satyanarayana</b>, <i>Director, IIT Tirupati, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Steering Committee </Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b> Aditya Bagchi</b>, <i>ISI Kolkota, India</i></li>
                        <li className="mt-2"><b> Arun Kumar Majumdar</b>, <i>IIT Kharagpur, India</i></li>
                        <li className="mt-2"><b> Atul Prakash</b>, <i>University of Michigan, United States</i></li>
                        <li className="mt-2"><b> Chandan Mazumdar</b>, <i>Jadavpur University, India</i></li>
                        <li className="mt-2"><b> Janakiram. D</b>, <i>IDRBT, India</i></li>
                        <li className="mt-2"><b> Pierangela Samarati</b>, <i>University of Milan, Italy</i></li>
                        <li className="mt-2"><b> Shyamasundar. R.K.</b>, <i>IIT Bombay, India</i></li>
                        <li className="mt-2"><b> Somesh Jha</b>, <i>University of Wisconsin, United States</i></li>
                        <li className="mt-2"><b> Sushil Jajodia</b>, <i>George Mason University, United States</i></li>
                        <li className="mt-2"><b> Venu Govindaraju</b>, <i>SUNY, United States</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">General Chair </Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b>  Shyamasundar. R.K.</b>, <i>IIT Bombay, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">TPC Chairs</Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b>Surya Nepal</b>, <i>CSIRO Australia’s National Science Agency, Australia</i></li>
                        <li className="mt-2"><b>Venkata Ramana Badarla</b>, <i>IIT Tirupati, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Tutorials and PhD Forum Chair</Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b>Jayanarayan T T</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b>Shachee Mishra</b>, <i>IBM Research Lab, India</i></li>
                        <li className="mt-2"><b>Vishwas Patil</b>, <i>IIT Bombay, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Publicity and Sponsorship Chairs</Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b>Kalidas Yeturu</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b>Manjul Verma</b>, <i>AI & Cloud [24]7.ai, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Local Organizing committee</Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b> Ajin J George</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b> Anil Kapoor</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b> Mahendran V</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b> Raja S</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b> Sridhar Chimalakonda</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b> Ramakrishna G</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b> Vamshi P</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b> Venkata Ramana Badarla (Chair)</b>, <i>IIT Tirupati, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Technical Programme Committee</Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b> Adwait Nadkarni</b>, <i>College of William and Mary, USA</i></li>
                        <li className="mt-2"><b> Anoop Singhal</b>, <i>NIST, USA</i></li>
                        <li className="mt-2"><b> Atul Prakash</b>, <i>University of Michigan, USA</i></li>
                        <li className="mt-2"><b> Bimal Roy</b>, <i>ISI Kolkata, India</i></li>
                        <li className="mt-2"><b> Carminati Michele</b>, <i>Politecnico di Milano, Italy</i></li>
                        <li className="mt-2"><b> Chaitanya Kumar</b>, <i>IBM Research, Singapore</i></li>
                        <li className="mt-2"><b> Chamikara Mahawaga Arachchige</b>, <i>CSIRO’s Data61, Australia</i></li>
                        <li className="mt-2"><b> Chittaranjan Hota</b>, <i>BITS Hyderabad, India</i></li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="commiteeheading">Website Design Committee</Row>
                    <ul className="commiteemembername ">
                        <li className="mt-2"><b>Jayaprakash V</b>, <i>IIT Tirupati, India</i></li>
                        <li className="mt-2"><b>Nagarajan R</b>, <i>IIT Tirupati, India</i></li>
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