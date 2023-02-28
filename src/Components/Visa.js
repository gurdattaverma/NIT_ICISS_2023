import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Visa = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Visa</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">General Information & Instructions</Row>
                        <p className="papertopicname mt-3">All non-Indian citizens are required to have an Indian travel visa to enter the country. Allow sufficient time (at least 4-6 weeks) to procure the appropriate visa from your nearest Indian consulate <a href="https://www.immihelp.com/indian-embassies-and-consulates-worldwide/" target="_blank" ><span className="papertopicnameblue">(see Indian consulates worldwide)</span></a>.
                        </p>

                        <p className="papertopicname mt-3">Participants who require an Indian visa to travel to ICISS are advised to check the exact set of approvals and clearances that the Indian Embassy requires, including requirements for security clearance that apply to passport holders from some countries. When completing the online Visa Invitation Letter Request form, check the last section of the form and complete if your passport country is named, no matter where you may currently reside. This is to ensure that the compliance is met with respect to the latest regulations enforced by the Indian Embassy issuing the visa.
                        </p>
                        <p className="visatxtred mt-3">The organizing chair will send you an invitation letter for participation in the conference once your registration is complete. Please write to the organizing chair Dr. Venkata Ramana Badarla ( <a href="https://www.immihelp.com/indian-embassies-and-consulates-worldwide/" target="_blank" ><span className="papertopicnameblue">iciss2022@iittp.ac.in</span></a>) along with your registration details.
                        </p>

                        <p className="papertopicname mt-3">The visa requirements for India are available at: <a href="http://boi.gov.in/content/visa-requirement" target="_blank" ><span className="papertopicnameblue">http://boi.gov.in/content/visa-requirement</span></a>
                        </p>
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

export default Visa