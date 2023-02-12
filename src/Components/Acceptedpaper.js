import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Acceptedpaper = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Accepted Papers</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout">Full Length Papers</Row>
                    <Row className="homeabouttext mt-3">
                        <ol className="" >
                            <li className="mt-2"><b>Ostinato: Cross-host Attack Correlation through Attack Activity Similarity Detection</b></li>
                            Sutanu Kumar Ghosh (University of Illinois, USA); Kiavash Satvat (University of Illinois, USA); Rigel Gjomemo (University of Illinois, USA); Venkat.N. Venkatakrishnan (University of Illinois, USA)

                            <li className="mt-2"><b>DKS-PKI: A Distributed Key Server Architecture for Public Key Infrastructure</b></li>
                            Abu Faisal (Queen’s University, Canada); Mohammad Zulkernine (Queen’s University, Canada)

                            <li className="mt-2"><b>Generating-Set Evaluation of Bloom Filter Hardening Techniques in Private Record Linkage</b></li>
                            Karin Mortl (University of Denver, USA); Rinku Dewri (University of Denver, USA)

                            <li className="mt-2"><b>SHIELD: A Multimodal Deep Learning Framework For Android Malware Detection</b></li>
                            Narendra Singh (IIT Patna, India); Somanath Tripathy (IIT Patna, India); Bruhadeshwar Bezawada (IIT Jammu, India)
                        </ol>
                    </Row>
                    <Row className="homeabout mt-4">Short Papers</Row>
                    <Row className="homeabouttext mt-3">
                        <ol className="" >
                            <li className="mt-2"><b>IoTInDet: Detecting Internet of Things Intrusions with Class Scatter Ratio and Hellinger Distance Statistics</b></li>
                            Bhuvaneswari Amma N G (Vellore Institute of Technology, India); Valarmathi P (Vellore Institute of Technology, India)

                            <li className="mt-2"><b>Detecting Cloud originated DDoS attacks at the source using Out-cloud attack detection (OCAD)</b></li>
                            Gulshan Kumar Singh (Central University of Rajasthan, India); Gaurav Somani (Central University of Rajasthan, India)
                        </ol>
                    </Row>
                    <Row className="homeabout mt-4">Work-In-Progress Papers </Row>
                    <Row className="homeabouttext mt-3">
                        <ol className="" >
                            <li className="mt-2"><b>WiP: Control Plane Saturation Attack Mitigation in Software Defined Networks</b></li>
                            Neminath Hubballi (IIT Indore, India); Kanishk Patel (IIT Indore, India)

                            <li className="mt-2"><b>WiP: EventTracker-Event Driven Evidence Collection for Digital Forensics</b></li>
                            Aniket Sangwan (IIT Indore, India); Sarthak Jain (IIT Indore, India); Neminath Hubballi (IIT Indore, India)
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

export default Acceptedpaper