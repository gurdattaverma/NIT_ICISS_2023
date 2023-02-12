import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Tutorials = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Call for Tutorial Proposals</Row>
                    <Row className="homeabouttext mt-3">
                        International Conference on Information and Systems Security (ICISS) is one of the leading conferences on security & privacy. The audience of ICISS is usually a mix of international researchers, graduate & post graduate students, industry practitioners, and a large portion of under graduate engineering students who are exploring their career paths in the field of security & privacy. ICISS 2022 will be hosted by the National Institute of Technology - Raupur. This year's edition of the ICISS will be organized in physical mode.
                    </Row>
                    <Row className="homeabouttext mt-3">
                        The Tutorial chairs of the 19th ICISS invite proposals for tutorials covering topics that fall within the scope of ICISS conference. We specially encourage industry practitioners to share their expertise through hands-on sessions. The proposal must include the following as a single PDF using LNCS style.
                    </Row>
                    <ol className="papertopicname" >
                        <li className="mt-4">Title & Abstract (~ 250 words) </li>
                        <li className="mt-2">Tutorial structure (4 pages max.) </li>
                        <li className="mt-2">Target audience (research/practice) </li>
                        <li className="mt-2">Prerequisites & pointers (1 page max.) </li>
                        <li className="mt-2">CV of the speaker(s) </li>
                    </ol>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="homeabouttext mt-3">
                <Col xs={1}></Col>
                <Col>
                    TEach proposal will be evaluated on the basis of its technical quality, duration (between 2 to 4 hours), expertise of the presenters, expected suitability to the audience of ICISS. A non-exhaustive list of (suggestive) topics that would be beneficial to the audience of ICISS is given below:
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <ul className="papertopicname" type="square">
                        <li className="mt-2">Android/iOS Security</li>
                        <li className="mt-2">Data (De)Anonymization Techniques</li>
                        <li className="mt-2">Comparison of Blockchain Frameworks </li>
                        <li className="mt-2">Smart Contracts</li>
                        <li className="mt-2">Secure Coding Techniques </li>
                        <li className="mt-2">OWASP Top 10 Attacks & Mitigation </li>
                        <li className="mt-2">Security/Privacy aspects in AI/ML </li>
                        <li className="mt-2">Privacy-by-Design</li>
                        <li className="mt-2">Threat Modeling</li>
                        <li className="mt-2">Emerging Trends in Security</li>
                        <li className="mt-2">Digital Forensics</li>
                    </ul>
                </Col>
                <Col>
                    <ul className="papertopicname " type="square">
                        <li className="mt-2">Offensive Security Tools/Techniques</li>
                        <li className="mt-2">Security Analytics/Visualization Methods</li>
                        <li className="mt-2">Building a SoC (from EDR to XDR)</li>
                        <li className="mt-2">SecOps, SecDevOps, Best Practices</li>
                        <li className="mt-2">Virtualization & micro-services for Security</li>
                        <li className="mt-2">Techniques of Malware Design/Deployment</li>
                        <li className="mt-2">Security in Cyber-Physical Systems</li>
                        <li className="mt-2">Fuzzing Techniques</li>
                        <li className="mt-2">Cryptographic Techniques for S&P</li>
                        <li className="mt-2">S&P in FinTech, Healthcare</li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Important Dates (AoE)</Row>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">Submission: Sep 04, 2023</li>
                            <li className="mt-2">Notification: Sep 18, 2023</li>
                            <li className="mt-2">Final Submission (slides): Dec 2, 2023</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Submission Instructions</Row>
                        <p>The proposal must be written in English and submitted to <a href="#" target="_blank"><span className="papertopicnameblue">iciss2022_tutorials@iittp.ac.in</span></a> as a single PDF file prepared using <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank"><span className="papertopicnameblue">the Springer Verlag LNCS Latex or Word style</span></a></p>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Tutorial Chairs </Row>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">Shachee Mishra Gupta, IBM Research</li>
                            <li className="mt-2">Vishwas T Patil, IIT Bombay</li>
                            <li className="mt-2">Jaynarayan Tudu, IIT Tirupati</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Briefing Details</Row>
                        <p>For any queries, please contact <a href="#" target="_blank"><span className="papertopicnameblue">icissconf22@gmail.com</span></a>. </p>
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

export default Tutorials