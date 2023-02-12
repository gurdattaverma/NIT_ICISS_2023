import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Industrypaper = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Call for Industry Papers</Row>
                    <Row className="homeabouttext mt-3">
                        The ICISS industry track is a forum for exchanging ideas, results, and lessons learned amongst wide areas of Cyber Security domain used in protecting, detecting, preventing, and monitoring IT systems in the digital ecosystem against ever changing threat landscape. The industry track is aimed at identifying the applications, tools or processes used in wide spectrum of Security Technologies across Application, Networking and Systems that yield a significant business value; wider adoption across industry; and intends to facilitate a discussion about what current industry challenges can be addressed, the hurdles that may stand in the way of broader adoption, and any novel problems and use cases.
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout">Topics of Interest</Row>
                    <Row className="homeabouttext mt-3">
                        We welcome contributions from any industry and the scope includes both theoretical and applied research within the broad area of information and systems security as mentioned below.
                        <ul className="industrypaperheading" type="square">
                            <li className="mt-2">Network and Hardware Security:</li>
                        </ul>
                        5G/6G Network security, Mobile network security, IoT security, Sensor and ad-hoc network security, Intrusion detection and recover
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <ul className="industrypaperheading" type="square">
                            <li className="mt-2">Data Security and Privacy:</li>
                        </ul>
                        Key management, Cryptographic protocols, Privacy and anonymity, Secure data streams, Cloud security
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <ul className="industrypaperheading" type="square">
                            <li className="mt-2">Systems Security:</li>
                        </ul>
                        Access control, Logging and Auditing, Distributed systems security, Operating systems security, Cyber-physical systems security
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <ul className="industrypaperheading" type="square">
                            <li className="mt-2">Application Security:</li>
                        </ul>
                        Vulnerability detection and mitigation, Software security, Web security, Malware analysis, Security testing, SDLC security
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <ul className="industrypaperheading" type="square">
                            <li className="mt-2">Human-Centric Security:</li>
                        </ul>
                        Usable authentication/Biometric security, Usable security, Usable privacy, Usage control, Identity management, Ethics/Law/Policy/Responsible innovation in security
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <ul className="industrypaperheading" type="square">
                            <li className="mt-2">Emerging Security:</li>
                        </ul>
                        Quantum security, AI/ML security, Blockchain security, Critical infrastructure security, Digital forensics, Threat hunting, Vulnerability and threat management
                    </Row>
                    <Row className="homeabouttext mt-4">
                        Across all submissions, emphasis should be put on demonstrating the business value and impact created by application, tool or process in security technologies to address real-world problems. We explicitly welcome papers that report on
                        <ul className="papertopicname" type="square">
                            <li className="mt-3">Adversarial techniques and vulnerability disclosures.</li>
                            <li className="mt-2">Safeguard controls used in risk mitigations.</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        Submission of paper will be reviewed single blinded by a committee of members from both industry and academia where emphasis is given on
                        <ul className="papertopicname" type="square">
                            <li className="mt-3">Paper that has never been presented elsewhere before.</li>
                            <li className="mt-2">Degree to which your work play a key role in the cyber security domain.</li>
                            <li className="mt-2">Maturity of the implementation and value created to the business or community.</li>
                            <li className="mt-2">Quantitative measurements of the business value created and a clear description of the impact.</li>
                            <li className="mt-2">Clear articulation of key takeaways for the intended audience by your research, the novel part etc.</li>
                            <li className="mt-2">Clarity and quality of the description.</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        Submission of paper will be reviewed single blinded by a committee of members from both industry and academia where emphasis is given on
                        <ul className="papertopicname" type="square">
                            <li className="mt-3">Paper that has never been presented elsewhere before.</li>
                            <li className="mt-2">Degree to which your work play a key role in the cyber security domain.</li>
                            <li className="mt-2">Maturity of the implementation and value created to the business or community.</li>
                            <li className="mt-2">Quantitative measurements of the business value created and a clear description of the impact.</li>
                            <li className="mt-2">Clear articulation of key takeaways for the intended audience by your research, the novel part etc.</li>
                            <li className="mt-2">Clarity and quality of the description.</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Benefits</Row>
                        <p>Authors of accepted papers will have the opportunity to present their work in the main ICISS 2022 conference, and discuss their contributions with attendees from academia, industry and government. All accepted contributions may be published to <a href="https://ceur-ws.org/" target="_blank"><span className="papertopicnameblue">CEUR Workshop Proceedings</span></a>. Additionally, authors will receive the following</p>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">A 25 minutes timeslot in the briefings for presentation.</li>
                            <li className="mt-2">A Certificate of Participation is issued from the host NIT Raipur.</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Submission Instructions</Row>
                        <p>Papers must be written in English using the template, which can be downloaded from <a href="#" target="_blank"><span className="papertopicnameblue">this link</span></a>. </p>
                        <p>Non-compliant of below instructions while paper submission will be disqualified. </p>
                        <ol className="papertopicname" >
                            <li className="mt-2">Please ensure that your paper submission includes PDF format only and should be 5 pages or more.</li>
                            <li className="mt-2">Conference templates contain guidance text for composing conference papers.Please ensure that all template text is removed from your conference paper prior to submission.</li>
                            <li className="mt-2">Use the same font type and size as per template.</li>
                            <li className="mt-2">Per submission there is no limit on the number of authors. However, the 1st email ID would be used for all the notifications and communication.</li>
                        </ol>
                        <p><b>Submission Link: </b>The final paper in PDF format should be submitted in Easychair through <a href="#" target="_blank"><span className="papertopicnameblue">this link</span></a>. </p>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Important Dates</Row>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">Submission Deadline: Oct 10, 2023</li>
                            <li className="mt-2">Notification to Authors: Oct 31, 2023</li>
                            <li className="mt-2">Camera Ready papers due: Nov 07, 2023</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Briefing Details</Row>
                        Will be updated soon!
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Briefing Details</Row>
                        <p>For any queries, please contact <a href="#" target="_blank"><span className="papertopicnameblue">iciss2022@iittp.ac.in</span></a>. </p>
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

export default Industrypaper