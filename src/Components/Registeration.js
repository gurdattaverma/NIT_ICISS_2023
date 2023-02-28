import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"
import newgif from "./Images/new.gif"

const Registration = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Registration</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Registration has two stages:</Row>
                    </Row>
                    <ol className="regtrationtopoptions">
                        <li className="mt-2">Payment</li>
                        <li className="mt-1">Filling out the Google Registration Form</li>
                    </ol>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">General Information & Instructions</Row>
                        <ul className="papertopicname" type="square">
                            <li className="mt-2">The conference registration includes access to all tutorials, all conference sessions, lunches on all conference days, the banquet dinner, and one electronic copy of the proceedings.</li>
                            <li className="mt-2">For each accepted paper, at least one author must register at Authors (full) Rate (i.e., at least one full registration for each accepted paper) on or before November 03, 2023. Without the registration, the paper will not be included in the LNCS proceedings.</li>
                            <li className="mt-2">Only students enrolled in full time programmes are eligible for registering at the student rate. Interested students should upload a letter to the Organizing Chair stating their enrolment in their university signed by Dean/ Head of Department while registering. The students rate is not applicable for students who are authors of accepted papers.</li>
                        </ul>
                    </Row>
                    <Row className="homeabouttext mt-5">
                        <Row className="homeabout">Payment Instructions</Row>
                        <Row className="regtrationoptionshead mt-3">a) Payment Categories</Row>
                        <p className="papertopicname mt-3">The conference Authors registration fee structure is as follows <span className="papertopicnameblue">(Last Date for Authors Registration: November 03, 2023):</span>
                        </p>
                        <Row className="mt-3">
                            <Col xs={4} className="regtrationtablehead">Authors</Col>
                            <Col xs={2} className="regtrationtablehead">Registration</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={4} className="regtrationtabletext">International</Col>
                            <Col xs={2} className="regtrationtabletext">$300</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={4} className="regtrationtabletext">National (Industry)</Col>
                            <Col xs={2} className="regtrationtabletext">₹15,000</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={4} className="regtrationtabletext">National* (Academia/R&D)</Col>
                            <Col xs={2} className="regtrationtabletext">₹10,000</Col>
                            <Col></Col>
                        </Row>
                        <p className="papertopicname mt-5">The conference Attendees registration fee structure is as follows <span className="papertopicnameblue">(Last Date for Early Registration: December 7, 2023):</span>
                        </p>
                        <Row className="mt-3">
                            <Col xs={2} className="regtrationtablehead">Attendees</Col>
                            <Col xs={2} className="regtrationtablehead">Early Registration </Col>
                            <Col xs={2} className="regtrationtablehead">Late Registration</Col>
                            <Col xs={2} className="regtrationtablehead">Onsite Registration</Col>
                            <Col xs={2} className="regtrationtablehead">Students</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtabletext">International</Col>
                            <Col xs={2} className="regtrationtabletext">$250</Col>
                            <Col xs={2} className="regtrationtabletext">$300</Col>
                            <Col xs={2} className="regtrationtabletext">$350</Col>
                            <Col xs={2} className="regtrationtabletext">$150</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtabletext">National (Industry)</Col>
                            <Col xs={2} className="regtrationtabletext">₹12,000</Col>
                            <Col xs={2} className="regtrationtabletext">₹15,000</Col>
                            <Col xs={2} className="regtrationtabletext">₹20,000</Col>
                            <Col xs={2} className="regtrationtabletext">-</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtabletext">National (Academia/R&D)</Col>
                            <Col xs={2} className="regtrationtabletext">₹8,000</Col>
                            <Col xs={2} className="regtrationtabletext">₹10,000</Col>
                            <Col xs={2} className="regtrationtabletext">₹12,000</Col>
                            <Col xs={2} className="regtrationtabletext">₹4,000</Col>
                            <Col></Col>
                        </Row>
                        <Row className=" mt-5" >
                            <p><span >
                                <img src={newgif} alt="" />
                            </span>
                                <span className="papertopicname mx-3" >Candidates selected under PhD Forum submission can register in students category by paying $150 in case of International and ₹ 4,000 in case of National participants.</span>
                            </p>
                            <p><span >
                                <img src={newgif} alt="" />
                            </span>
                                <span className="papertopicname mx-3" >The below rates are applicable only for attending the confernce in virtual/online mode</span>
                            </p>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={3} className="regtrationtablehead">Attendees</Col>
                            <Col xs={3} className="regtrationtablehead">Online Participation Fee</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={3} className="regtrationtabletext">International</Col>
                            <Col xs={3} className="regtrationtabletext">$150</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={3} className="regtrationtabletext">National (Industry)</Col>
                            <Col xs={3} className="regtrationtabletext">₹9,000</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={3} className="regtrationtabletext">National* (Academia/R&D)</Col>
                            <Col xs={3} className="regtrationtabletext">₹5,000</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={3} className="regtrationtabletext">National* (Academia/R&D)</Col>
                            <Col xs={3} className="regtrationtabletext">₹2,000</Col>
                            <Col></Col>
                        </Row> 
                        <Row className="regtrationoptionshead mt-3">b) Banking Information for Registration Fee Transfer</Row>
                        <Row className="papertopicnameblue mt-4">International Delegates (US Dollars)
                        </Row>
                        <Row className="papertopicname mt-3">International delegates must transfer the registration amount via wire-transfer to the account mentioned below
                        </Row>
                        <Row className="mt-3">
                            <Col xs={2} className="regtrationtablehead">Field</Col>
                            <Col xs={4} className="regtrationtablehead">Details</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">A/C Name</Col>
                            <Col xs={4} className="regtrationtabletext">Indian Institute of Technology Tirupati - Projects</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">A/C Number</Col>
                            <Col xs={4} className="regtrationtabletext">921010000757268</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">Bank Name</Col>
                            <Col xs={4} className="regtrationtabletext">Axis Bank Ltd</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">Branch Name</Col>
                            <Col xs={4} className="regtrationtabletext">K.T Road, Tirupati</Col>
                            <Col></Col>
                        </Row> 
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">SWIFT Code</Col>
                            <Col xs={4} className="regtrationtabletext">AXISINBBA17</Col>
                            <Col></Col>
                        </Row> 
                        <Row className="papertopicnameblue mt-5">National Delegates (Indian Rupees)
                        </Row>
                        <Row className="papertopicname mt-3">National delegates must transfer the registration amount via NEFT/RTGS/IMPS to the account mentioned below
                        </Row>
                        <Row className="mt-3">
                            <Col xs={2} className="regtrationtablehead">Field</Col>
                            <Col xs={4} className="regtrationtablehead">Details</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">A/C Name</Col>
                            <Col xs={4} className="regtrationtabletext">Indian Institute of Technology Tirupati - Projects</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">A/C Number</Col>
                            <Col xs={4} className="regtrationtabletext">921010000757268</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">Bank Name</Col>
                            <Col xs={4} className="regtrationtabletext">Axis Bank Ltd</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">Branch Name</Col>
                            <Col xs={4} className="regtrationtabletext">K.T Road, Tirupati</Col>
                            <Col></Col>
                        </Row> 
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtablehead">IFSC Code</Col>
                            <Col xs={4} className="regtrationtabletext">UTIB0001018</Col>
                            <Col></Col>
                        </Row> 
                        <Row className="homeabout mt-5">Filling out Google Registration Form</Row>
                        <Row className="papertopicname mt-3">
                        Transfer the relevant amount to our IIT Tirupati Bank Account and save the transaction reference number and fill out the google form by clicking the below registration link with the details. 
                        </Row>
                        <p className="papertopicname mt-3">
                        <b>Note:</b> All registered participants will be sent a confirmation email upon verifying the payment details and the registration amount will not be refunded.
                        </p>
                        <p className="papertopicname">Please <a href="#" ><span className="papertopicnameblue">click here </span></a>to fill the Form and complete your registration.</p>
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

export default Registration