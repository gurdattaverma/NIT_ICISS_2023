import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Paper = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Call for Papers</Row>
                    <Row className="homeabouttext mt-3">
                        The International Conference on Information Systems Security (ICISS), held annually in India, is a forum for disseminating research results and meeting finer minds on computer security. ICISS 2023, the 18th edition of the conference, will be held at NIT Raipue in the city of Raipur from December 16 to 20, 2023. The conference will include high quality technical papers, a set of visionary/invited papers on important and timely topics from well-known leaders in the field, and a session on the work in progress. Alongside the broader objectives, the ICISS 2023 emphasizes enhancing the cooperation between India and Australia on information security research activity. The conference therefore invites the researchers and security enthusiasts to take advantage of the forum to share and discuss the subject concerns to the topic of computer security. The scope includes theoretical and applied research within the broad area of information and systems security, as mentioned below.
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-4">
                <Col xs={1}></Col>
                <Col>
                    <Row className="paperheading">Paper Submission</Row>
                    <ul className="papertopicname" type="square">
                        <li className="mt-2">5G/6G Network security</li>
                        <li className="mt-2">Mobile network security</li>
                        <li className="mt-2">IoT Security</li>
                        <li className="mt-2">Sensor and ad-hoc network security</li>
                        <li className="mt-2">Intrusion detection and recovery</li>
                    </ul>
                </Col>
                <Col>
                    <Row className="paperheading">Data Security and Privacy</Row>
                    <ul className="papertopicname " type="square">
                        <li className="mt-2">Key management</li>
                        <li className="mt-2">Cryptographic protocols</li>
                        <li className="mt-2">Privacy and anonymity</li>
                        <li className="mt-2">Secure data streams</li>
                        <li className="mt-2">Cloud Security</li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="paperheading">Systems Security</Row>
                    <ul className="papertopicname" type="square">
                        <li className="mt-2">Access control</li>
                        <li className="mt-2">Logging and Auditing</li>
                        <li className="mt-2">Distributed systems security</li>
                        <li className="mt-2">Operating systems security</li>
                        <li className="mt-2">Cyber-physical systems security</li>
                    </ul>
                </Col>
                <Col>
                    <Row className="paperheading">Application Security</Row>
                    <ul className="papertopicname " type="square">
                        <li className="mt-2">Vulnerability detection and mitigation</li>
                        <li className="mt-2">Software security</li>
                        <li className="mt-2">Web security</li>
                        <li className="mt-2">Malware analysis</li>
                        <li className="mt-2">Security testing</li>
                        <li className="mt-2">SDLC security</li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col>
                    <Row className="paperheading">Human-Centric Security</Row>
                    <ul className="papertopicname" type="square">
                        <li className="mt-2">Usable Authentication/Biometric security</li>
                        <li className="mt-2">Usable security</li>
                        <li className="mt-2">Usable privacy</li>
                        <li className="mt-2">Usage control</li>
                        <li className="mt-2">Identity management</li>
                        <li className="mt-2">Ethics/Law/Policy/Responsible innovation in security</li>
                    </ul>
                </Col>
                <Col>
                    <Row className="paperheading">Emerging areas</Row>
                    <ul className="papertopicname " type="square">
                        <li className="mt-2">Quantum Security</li>
                        <li className="mt-2">AI/ML Security</li>
                        <li className="mt-2">Blockchain Security</li>
                        <li className="mt-2">Critical infrastructure security</li>
                        <li className="mt-2">Digital forensics</li>
                        <li className="mt-2">Threat hunting</li>
                        <li className="mt-2">Vulnerability & threat management</li>
                    </ul>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout">Paper Submission</Row>
                    <Row className="homeabouttext mt-3">
                        <b>This year, we invite papers in multiple categories.</b>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">Regular papers, which present mature, complete research results. These papers should be at most 20 pages in length, including bibliography.</li>
                            <li className="mt-2">Work-in-progress (WiP) papers for early dissemination of research that isn't yet complete. These papers should be at most 12 pages in length, including bibliography. WiP papers must clearly identify the goals of the work and the technical approach, and include enough initial development to demonstrate the viability of the approach. The title must be prefixed with "WiP: " to clearly indicate that the submission is a WiP paper.</li>
                            <li className="mt-2">Visionary papers from seasoned researchers or technical committees to share their visions on a significant trend or technical challenges, and the innovative ideas/concepts that may produce a wide range of impacts in the area of information and systems security. A paper of this type is intended to promote, influence or lead the research activities in the subject area.</li>
                        </ul>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout">Authors Resources</Row>
                    <Row className="papertopicname mt-3">
                        Papers must be written in English and submitted in the Springer Verlag LNCS Latex or Word style in PDF format, via EasyChair. The review process is single-blind, meaning that author names will be visible to reviewers.
                        <ul className="papertopicname" type="square">
                            <li className="mt-2"><span>Please click here for </span> <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank"><span className="papertopicnameblue">Latex and MS Word LNCS Proceedings Templates</span></a> </li>
                            <li className="mt-2"><span>Please click here for </span> <a href="https://easychair.org/account/signin_timeout?l=KXKsVNf93ItYDLvsZeScws" target="_blank"></a><span className="papertopicnameblue">Paper Submission at EasyChair</span> </li>
                        </ul>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout">Proceedings</Row>
                    <Row className="papertopicname mt-3">
                        <p>The past proceedings of the conference are published by <a href="https://link.springer.com/conference/iciss" target="_blank"><span className="papertopicnameblue">Springer Verlag </span></a>as part of their LNCS series. The same tradition will follow. The extended versions of selected and accepted papers will be invited for publication in the <a href="https://www.ias.ac.in/sadhana" target="_blank"><span className="papertopicnameblue">Indian Academy of Sciences’ journal-SADHANA</span></a>. ICISS will also have a best paper award.</p>
                    </Row>
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

export default Paper