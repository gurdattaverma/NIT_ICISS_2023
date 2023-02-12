import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Phdforumprogram = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">PhD Forum</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-3">
                        <ol className="" >
                            <li className="mt-2"><b>Design and Analysis of Authentication Protocols for Dynamic Charging System of Electric Vehicles</b></li>
                            Raveendra Babu Ponnuru (National Institute of Technology, Andhrapradesh)

                            <li className="mt-4"><b>Electricity Theft Detection Using Machine Learning</b></li>
                            Rajesh Nayak (National Institute of Technology, Surathkal)

                            <li className="mt-4"><b>Network Flow based Cyber Attack Detection in Smart-Grid Networks</b></li>
                            Nisha Kumari Barsha (IIT Indore)

                            <li className="mt-4"><b>pzLedger: Privacy Preservation for Energy Trading Transaction in Smart Grid</b></li>
                            Narendra Singh (IIT Patna, India); Somanath Tripathy (IIT Patna, India); Bruhadeshwar Bezawada (IIT Jammu, India)

                            <li className="mt-4"><b>Success Factors in Secure Software Development of Cloud Applications in Germany</b></li>
                            Marc Aurel Schubert (University of Applied Sciences, Mainz)

                            <li className="mt-4"><b>Intrusion Detection System powered by Incremental Learning</b></li>
                            Chetan Sharma (IIT Tirupati)

                            <li className="mt-4"><b>Secured model training using synthetic data captured by Gaussian Mixture Models</b></li>
                            Aditi Palit (IIT Tirupati)
                        </ol>
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

export default Phdforumprogram