import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Travel = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Travel & Venue</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Conference Venue</Row>
                        <Row className="papertopicname mt-3">National Institute of Technology  Raipur</Row>
                        <Row className="papertopicname ">G.E. Road, Raipur</Row>
                        <Row className="papertopicname ">Chhatisgarh - 492010</Row>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Distance from various landmarks</Row>
                        <ol className="papertopicname mt-3" type="square">
                            <li className="mt-2">5 km from Raipur Railway Station</li>
                            <li className="mt-1">14 km from SWAMI VIVEKANANDA AIRPORT, RAIPUR</li>
                        </ol>
                        <Row className="papertopicname mt-4">The campus is very well connected to the other parts of the country by road, rail, and air.</Row>
                        
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row >

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

export default Travel