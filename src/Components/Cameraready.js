import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"
import newgif from "./Images/new.gif"

const Cameraready = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Camera-ready Instructions</Row>
                    <Row className=" mt-3" >
                        <p><span >
                            <img src={newgif} alt="" />
                        </span>
                            <span className="papertopicnameblue mx-3" ><a href="#">Instructions for Authors to Prepare the Cameraready Paper</a> </span>
                        </p>
                    </Row>
                    <Row className=" mt-3" >
                        <p><span >
                            <img src={newgif} alt="" />
                        </span>
                            <span className="papertopicnameblue mx-3" ><a href="#">License to Publish Form (doc) </a> </span>
                        </p>
                    </Row>
                    <Row className="homeabouttext mt-3">
                        Authors should consult Springer's authors' guidelines and use their proceedings templates, either for LaTeX or for Word, for the preparation of their papers. Springer encourages authors to include their ORCIDs (https://goo.gl/hbsa4D) in their papers. In addition, the corresponding author of each paper, acting on behalf of all of the authors of that paper, must complete and sign a License-to-Publish form. The corresponding author signing the copyright form should match the corresponding author marked on the paper. Once the files have been sent to Springer, changes relating to the authorship of the papers cannot be made.
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Paper Formatting</Row>
                        <p>You must format your paper following Springer's guidelines for LNCS proceedings. Details and templates for LaTeX and Microsoft Word are available <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank"><span className="papertopicnameblue">here. </span></a> The page limit (including bibliography) is 20 pages for regular papers and 15 pages for short and 12 pages for work-in-progress (WiP) papers in the format at the url above. </p>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Paper Submission</Row>
                        You need to upload the following three documents:
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">A PDF of your final camera-ready paper</li>
                            <li className="mt-2">A ZIP (.zip) file containing all the LaTeX or Word sources of your paper, including any bibliography files. These are needed by Springer to complete their editorial work.</li>
                            <li className="mt-2">A completed, signed copyright transfer form (i.e., License to publish Form) that gives Springer the permission to publish your paper. You must fill the form, sign it and upload its PDF. You can create the completed PDF by filling and signing the form on an electronic medium like a tablet or a touchscreen, or by printing, filling, signing and scanning the form. </li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Submission Link</Row>
                        <li className="mt-2"><b>Submission Link: </b>All the 3 files should be submitted via the link shared to the corresponding author's email. </li>
                        <li className="mt-2"><b>Submission Deadline: </b>Oct 26, 2023 (AoE) </li>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Post Editing </Row>
                        After Springer has copy-edited your paper, they may send an email to the primary contact author with a 72-hour window to allow the detection of any editorial/formatting mistakes introduced by Springer. We cannot predict when this 72 hour window will be. Consequently, please make sure that the contact authors of your paper check their email regularly between October 26, 2022 and the conference.
                    </Row>
                    <Row className="homeabouttext mt-4">
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

export default Cameraready