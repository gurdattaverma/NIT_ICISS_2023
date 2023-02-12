import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"
import newgif from "./Images/new.gif"

const Mainconference = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Program</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col className="">
                    <Row className="mainprogrambox">
                        <Row className="mainprogramname justify_content_center mt-3">
                            19th International Conference on Information Systems Security (ICISS 2022)
                        </Row>
                        <Row className="mainprogramname justify_content_center mt-3">
                            NIT Raipur, December 16-20, 2023
                        </Row>
                        <Row className="mainprogrammainheading mt-4 mb-0 mx-0">
                            <Col xs={2}>Session</Col>
                            <Col xs={2}>Time</Col>
                            <Col>Paper/Keynote</Col>
                            <Col xs={2}>Presenter</Col>
                        </Row>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row >

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col className="">
                    <Row className="mainprogrambox">
                        <Row className="mainprogrammainheading2 mt-0 mb-0 mx-0">
                            Saturday, December 16th 2023
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Welcome</Col>
                            <Col xs={2}>08:00 - 09:30</Col>
                            <Col>Registration / Networking</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 1</Col>
                            <Col xs={2}>09:30 - 13:00</Col>
                            <Col>Tutorials: Techniques of Malware Design/Deployment (Part - 1)
                                <br />Tea Break from 11:30 - 11:45</Col>
                            <Col xs={2}>Saurabh Sharma <br />(Kaspersky)</Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>13:00 - 14:00</Col>
                            <Col>Lunch Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 2</Col>
                            <Col xs={2}>14:00 - 16:00</Col>
                            <Col>Tutorials: An Introduction to Mitre Att&ck and Framework</Col>
                            <Col xs={2}>Harshal Tupsamudre <br />(Qualys)</Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>13:00 - 14:00</Col>
                            <Col>Lunch Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 3</Col>
                            <Col xs={2}>16:15 - 18:15</Col>
                            <Col>Tutorials: Techniques of Malware Design/Deployment (Part - 1)
                                <br />Tea Break from 11:30 - 11:45</Col>
                            <Col xs={2}>Saurabh Sharma <br />(Kaspersky)</Col>
                        </Row>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row >

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col className="">
                    <Row className="mainprogrambox">
                        <Row className="mainprogrammainheading2 mt-0 mb-0 mx-0">
                            Sunday, December 17th 2023
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Inauguration</Col>
                            <Col xs={2}>09:00 - 09:30</Col>
                            <Col>Welcome Address</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 4
                                <br />Chair: Dr Somanath Tripathy (IIT Patna)</Col>
                            <Col xs={2}>09:30 - 10:30</Col>
                            <Col>Keynote Talk: The Rise of Cyber Physical Security – In Light of Cyber Physical Systems</Col>
                            <Col xs={2}><b>Dr Chandrakant D. Patel</b></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>10:30 - 11:00</Col>
                            <Col>Invited Talk: Advanced Persistent Threats: A Study in Indian Context</Col>
                            <Col xs={2}><b>Mr Himanshu Dubey</b></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>11:00 - 11:30</Col>
                            <Col>Generating-Set Evaluation of Bloom Filter Hardening Techniques in Private Record Linkage - Karin Mortl (University of Denver, USA); Rinku Dewri (University of Denver, USA)</Col>
                            <Col xs={2}><b></b></Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>11:30 - 11:45</Col>
                            <Col>Tea Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 5
                                <br />Chair: Dr Rinku Dewri (DU, USA)   </Col>
                            <Col xs={2}>11:45 - 12:15</Col>
                            <Col>Ostinato: Cross-host Attack Correlation through Attack Activity Similarity <br />Detection - Sutanu Kumar Ghosh (University of Illinois, USA); Kiavash Satvat (University of Illinois, USA); Rigel Gjomemo (University of Illinois, USA); Venkat.N. Venkatakrishnan (University of Illinois, USA)</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>12:15 - 12:45</Col>
                            <Col>SHIELD: A Multimodal Deep Learning Framework For Android Malware <br />Detection - Narendra Singh (IIT Patna, India); Somanath Tripathy (IIT Patna, India); Bruhadeshwar Bezawada (IIT Jammu, India)</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>12:45 - 13:15</Col>
                            <Col>Samyukta: A Unified Access Control Model using Roles, Labels, and Attributes - Radhika B S (IIIT Dharwad, India); N V Narendra Kumar (IDRBT, India); R K Shyamasundar (IIT Bombay, India)</Col>
                            <Col xs={2}><b></b></Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>13:15 - 14:00</Col>
                            <Col>Lunch Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 6
                                <br />Chair: Dr Shalini Kesar (SUU, USA)</Col>
                            <Col xs={2}>14:00 - 15:00</Col>
                            <Col>
                                <ol>
                                    <li className="">IoTInDet: Detecting Internet of Things Intrusions with Class Scatter Ratio and Hellinger Distance Statistics - Bhuvaneswari Amma N G (Vellore Institute of Technology, India); Valarmathi P (Vellore Institute of Technology, India)</li>
                                    <li className="mt-1">WiP: Control Plane Saturation Attack Mitigation in Software Defined Networks - Neminath Hubballi (IIT Indore, India); Kanishk Patel (IIT Indore, India) </li>
                                    <li className="mt-1">WiP: EventTracker-Event Driven Evidence Collection for Digital Forensics - Aniket Sangwan (IIT Indore, India); Sarthak Jain (IIT Indore, India); Neminath Hubballi (IIT Indore, India) </li>
                                </ol>
                            </Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>15:00 - 15:30</Col>
                            <Col>Efficient and Effective Static Android Malware Detection Using Machine Learning - Vidhi Bansal (Indira Gandhi Delhi Technical University for Women, India); Mohona Ghosh (Indira Gandhi Delhi Technical University for Women, India); Niyati Baliyan (Indira Gandhi Delhi Technical University for Women, India)</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>15:30 - 16:00</Col>
                            <Col>MILSA: Model Interpretation based Label Sniffing Attack in Federated Learning - Debasmita Manna (IIT Patna, India); Harsh Kasyap (IIT Patna, India); Somanath Tripathy (IIT Patna, India)</Col>
                            <Col xs={2}><b></b></Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>16:00 - 16:15</Col>
                            <Col>Tea Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 7*</Col>
                            <Col xs={2}>16:15 - 18:15</Col>
                            <Col>Tutorials: Secure Digital Transformation Leveraging Aadhaar (Part 1)</Col>
                            <Col xs={2}> 	Vijayakumar Manjunatha (eMudhra)</Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>16:15 - 18:15</Col>
                            <Col>Tutorials: Techniques of Malware Design/Deployment (Part 3)</Col>
                            <Col xs={2}>Saurabh Sharma (Kaspersky)</Col>
                        </Row>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row >

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col className="">
                    <Row className="mainprogrambox">
                        <Row className="mainprogrammainheading2 mt-0 mb-0 mx-0">
                            Monday, December 18th 2023
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 8
                                <br />Chair: Dr Sithu D Sudarsan (CDAC)</Col>
                            <Col xs={2}>09:30 - 10:30</Col>
                            <Col>Keynote Talk: Security and Privacy in Federated Learning</Col>
                            <Col xs={2}><b>Prof Ling Liu</b></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>10:30 - 11:00</Col>
                            <Col>DKS-PKI: A Distributed Key Server Architecture for Public Key Infrastructure - Abu Faisal (Queen’s University, Canada); Mohammad Zulkernine (Queen’s University, Canada)</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>11:00 - 11:30</Col>
                            <Col>Detecting Cloud originated DDoS attacks at the source using Out-cloud attack detection (OCAD) - Gulshan Kumar Singh (Central University of Rajasthan, India); Gaurav Somani (Central University of Rajasthan, India)</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>11:30 - 11:45</Col>
                            <Col>Tea Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 9
                                <br />Chair: Dr Rinku Dewri (DU, USA)   </Col>
                            <Col xs={2}>11:45 - 13:00</Col>
                            <Col>Panel Discussion on Cybersecurity Challenges in National Security</Col>
                            <Col xs={2}>Dr Anil Kapoor</Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>13:00 - 14:00</Col>
                            <Col>Lunch Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 10
                                <br />Chair: Dr Praveen Gauravaram (TCS-Research)</Col>
                            <Col xs={2}>14:00 - 15:00</Col>
                            <Col>
                                Keynote Talk: Research and Engineering Challenges of Blockchain and Web3
                            </Col>
                            <Col xs={2}><b>Dr Ashish Kundu</b></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>15:00 - 16:00</Col>
                            <Col>Tutorials: Secure Digital Transformation Leveraging Aadhaar (Part 2)</Col>
                            <Col xs={2}>Vijayakumar Manjunatha (eMudhra)</Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>15:00 - 16:00</Col>
                            <Col> 	Tutorials: Techniques of Malware Design/Deployment (Part 4)</Col>
                            <Col xs={2}> 	Vijayakumar Manjunatha (eMudhra)</Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>16:00 - 16:15</Col>
                            <Col>Tea Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 12<br />Chair: Dr Mahendran V (IIT Tirupati)</Col>
                            <Col xs={2}>16:15 - 17:15</Col>
                            <Col>Keynote Talk: Web3 and the Interoperability of Asset Networks</Col>
                            <Col xs={2}><b>Dr Thomas Hardjono</b></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>17:15 - 18:15</Col>
                            <Col>Business Meeting (On Invitation)</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramdinnerbg mt-3 mx-0">
                            <Col xs={2}>Dinner</Col>
                            <Col xs={2}>19:30 onwards</Col>
                            <Col>Banquet Dinner - Venue (will be updated)</Col>
                            <Col xs={2}></Col>
                        </Row>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row >

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col className="">
                    <Row className="mainprogrambox">
                        <Row className="mainprogrammainheading2 mt-0 mb-0 mx-0">
                            Tuesday, December 19th 2023
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 13
                                <br />Chair: Dr Neminath Hubballi (IIT Indore)</Col>
                            <Col xs={2}>09:30 - 10:00</Col>
                            <Col>Invited Talk: Securing Cyber-Physical and IoT Systems in Smart Living Environments</Col>
                            <Col xs={2}><b>Prof Sajal Das</b></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>10:00 - 11:00</Col>
                            <Col>
                            <ol>
                                <li className="">Mining Attribute-Based Access Control Policies - Maryam Davari (Queen’s University, Canada); Mohammad Zulkernine (Queen’s University, Canada)</li>
                                <li className="mt-1">Preventing Privacy-Violating Information Flows in JavaScript Applications using Dynamic Labelling - Sandip Ghosal (Uppsala University, Sweden); R. K. Shyamasundar (IIT Bombay, India) </li>
                                <li className="mt-1">On the Impact of Model Tolerance in Power Grid Anomaly Detection Systems - Srinidhi Madabhushi (University of Denver, USA); Rinku Dewri (University of Denver, USA)  </li>
                            </ol>
                            </Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>11:00 - 11:30</Col>
                            <Col>Attacks on ML Systems: From Security Analysis to Attack Mitigation - Qingtian Zou (Pennsylvania State University, USA); Lan Zhang (Pennsylvania State University, USA); Anoop Singhal (National Institute of Standards and Technology, USA); Xiaoyan Sun (California State University, USA); Peng Liu (Pennsylvania State University, USA)</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>11:30 - 11:45</Col>
                            <Col>Tea Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 14
                                <br />Chair: Dr Kalidas Y (IIT Tirupati)</Col>
                            <Col xs={2}>11:45 - 12:45</Col>
                            <Col>Keynote Talk: Technology Transfer from Security Research Projects: A Personal Perspective</Col>
                            <Col xs={2}><b>Prof Asokan</b></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>12:45 - 13:00</Col>
                            <Col>WiP: Characterizing the Impact of Multiplexed DoS Attacks on HTTP and Detection - Shaurya Sood (IIT Indore, India); Pritesh Palod (IIT Indore, India); Neminath Hubballi (IIT Indore, India) </Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>13:00 - 14:00</Col>
                            <Col>Lunch Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 15
                                <br />Chair: Dr Shachee Mishra (IBM-Research) &
                                Dr Sajal Das (MUST, USA)</Col>
                            <Col xs={2}>14:00 - 15:00</Col>
                            <Col>
                                PhD Forum Poster Presentations
                            </Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 16*</Col>
                            <Col xs={2}>15:00 - 16:00</Col>
                            <Col>Tutorials: An Overview of Encrypted Traffic Analysis for Cyber Security (Part 1)</Col>
                            <Col xs={2}>Debapriyay Mukhopadhyay (Vehere Technologies)</Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>15:00 - 16:00</Col>
                            <Col>Tutorials: Techniques of Malware Design/Deployment (Part 5)</Col>
                            <Col xs={2}>Saurabh Sharma (Kaspersky)</Col>
                        </Row>
                        <Row className="mainprogramlunchbg mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>16:00 - 16:15</Col>
                            <Col>Tea Break</Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}>Session - 17*</Col>
                            <Col xs={2}>16:15 - 18:15</Col>
                            <Col>Tutorials: An Overview of Encrypted Traffic Analysis for Cyber Security (Part 2)</Col>
                            <Col xs={2}>Debapriyay Mukhopadhyay (Vehere Technologies)</Col>
                        </Row>
                        <Row className="mainprogramtext mt-3 mx-0">
                            <Col xs={2}></Col>
                            <Col xs={2}>17:15 - 18:15</Col>
                            <Col>Tutorials: Techniques of Malware Design/Deployment (Part 6)</Col>
                            <Col xs={2}>Tutorials: Techniques of Malware Design/Deployment (Part 6)</Col>
                        </Row>
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

export default Mainconference