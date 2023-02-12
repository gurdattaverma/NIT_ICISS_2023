import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Phdforum = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Call for PhD Forum Papers</Row>
                    <Row className="homeabouttext mt-3">
                        International Conference on Information and Systems Security (ICISS) is one of the leading conferences on security & privacy. The audience of ICISS is usually a mix of international researchers, graduate & post graduate students, industry practitioners working in the field of security & privacy.
                    </Row>
                    <Row className="homeabouttext mt-3">
                        ICISS PhD Forum is an excellent opportunity for PhD students to present their preliminary work and get it validated by experts available during the conference. This opportunity to network with established international researchers also helps in building a rapport with them and opens up possibilities of collaboration in terms of internship, post-doctoral fellowship. This will be an excellent venue to articulate and present your work-in-progress in a public, encouraging environment to receive a constructive feedback. Furthermore, there will be several pre-conference tutorials lined up, exposing you to topics beyond your current interests.
                    </Row>
                    <Row className="homeabouttext mt-3">
                        The PhD Forum Co-Chairs of the 18th ICISS invite early research ideas covering topics that fall within the scope of ICISS. The forum will be conducted in two formats:
                    </Row>
                    <Row className="homeabouttext mt-3">
                        <b>Early-stage PhD Students: </b>those who are working towards research topic selection will submit:
                    </Row>
                    <ol className="papertopicname" >
                        <li className="mt-4">Problem being considered</li>
                        <li className="mt-2">Its relevance and impact</li>
                        <li className="mt-2">Potential approaches</li>
                        <li className="mt-2">Poster (36 in x 48 in)</li>
                        <li className="mt-2">Presentation (5 minutes)</li>
                    </ol>
                    <Row className="homeabouttext mt-3">
                        <b>Later-stage PhD Students: </b>those who have selected a research topic and have some preliminary insights/results will submit:
                    </Row>
                    <ol className="papertopicname" >
                        <li className="mt-4">Problem statement</li>
                        <li className="mt-2">State-of-the-art, gaps, novelty</li>
                        <li className="mt-2">Methodology, early results</li>
                        <li className="mt-2">Poster (48 in x 60 in)</li>
                        <li className="mt-2">Presentation (10 minutes)</li>
                    </ol>
                    <Row className="homeabouttext mt-3">
                        The Poster and the Presentation have to be submitted after acceptance of your proposal to the forum.
                    </Row>
                    <Row className="homeabouttext mt-3">
                        Each proposal must contain a title, author’s name & affiliation (and a footnote indicating year of PhD admission followed by advisor’s name and affiliation). The submission must be compiled using LNCS style. The early-stage type of submission must not exceed 2-pages and the later-stage submission, 4-pages.
                    </Row>
                    <Row className="homeabouttext mt-3">
                        The authors of the accepted proposals will be allowed to display their posters throughout the conference in order to maximize their interactions with the attendees. A thematic compilation of all proposals will be made available as a technical report of NIT-Raipur.
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Important Dates (AoE)</Row>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">Submission: Sep 20, 2023</li>
                            <li className="mt-2"><b>Hard Deadline: Sep 25, 2023</b></li>
                            <li className="mt-2">Notification: Oct 20, 2023</li>
                            <li className="mt-2">Poster/Presentation Submission: Nov 30, 2023</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Paper Submission</Row>
                        <p>Proposal must be written in English and submitted as a PDF file prepared using the <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank"><span className="papertopicnameblue">Springer Verlag LNCS Latex or Word style</span></a> via <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICISSPhDFORUM2022" target="_blank"><span className="papertopicnameblue">Microsoft CMT</span></a></p>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Travel Grant </Row>
                        <p>Student authors of accepted papers may avail partial travel grants by writing to the PhD Forum co-chairs. </p>
                        <p>Contact: <a href="#" target="_blank"><span className="papertopicnameblue">icissconf22@gmail.com</span></a></p>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">PhD Forum Co-Chairs </Row>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">Shachee Mishra Gupta, IBM Research </li>
                            <li className="mt-2">Vishwas T Patil, IIT Bombay </li>
                            <li className="mt-2">Jaynarayan Tudu, IIT Tirupati</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
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

export default Phdforum