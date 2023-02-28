import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"

const Accomodation = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Accomodation</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Student Hostels</Row>
                        <Row className="papertopicname mt-3">Students attending ICISS conference may avail NIT Raipur's hostel facility on payment basis. Participants will be allocated to a single occupancy room or shared room based on availability. Girl participants will be accommodated in Girl's Hostel.</Row>
                        <Row className="papertopicname mt-1">Facilities provided in the hostel accomodation will be Drinking water, Electricity and amenities like Cot, Table & Chair, Mattresses, Pillows, Buckets & Mugs.</Row>
                        <Row className="papertopicname mt-1">Participants are requested to bring their own bed spread, blanket and pillow covers.</Row>
                        <Row className="accomodationboldtext mt-1">The per day hostel accomodation charges is Rs 105/- which needs to be paid along with the registration fee for the number of days of hostel stay required. </Row>
                        <Row className="papertopicname mt-1">Note: Participants are requested to directly pay to the vendor while availing food at hostel mess.</Row>
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">List of Hotels Nearby</Row>
                        <Row className="mt-3">
                            <Col xs={2} className="regtrationtablehead">Hotel Name</Col>
                            <Col xs={1} className="regtrationtablehead">Star Rating</Col>
                            <Col xs={1} className="regtrationtablehead">Distance from NIT</Col>
                            <Col xs={1} className="regtrationtablehead">Single Room Tariff</Col>
                            <Col xs={1} className="regtrationtablehead">Double Room Tariff</Col>
                            <Col xs={1} className="regtrationtablehead">Website Link</Col>
                            <Col xs={1} className="regtrationtablehead">Google Maps Link</Col>
                            <Col xs={1} className="regtrationtablehead">Contact Number (+91)</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtabletext">Hotel Bliss</Col>
                            <Col xs={1} className="regtrationtabletext">3-Star</Col>
                            <Col xs={1} className="regtrationtabletext">22 KM</Col>
                            <Col xs={1} className="regtrationtabletext">3200</Col>
                            <Col xs={1} className="regtrationtabletext">3600</Col>
                            <Col xs={1} className="regtrationtabletext"><a href="#">Click Here</a></Col>
                            <Col xs={1} className="regtrationtabletext"><a href="#">Click Here</a></Col>
                            <Col xs={1} className="regtrationtabletext">77999 90334</Col>
                            <Col></Col>
                        </Row>
                        <Row className="mt-0">
                            <Col xs={2} className="regtrationtabletext">Fortune Grand Ridge</Col>
                            <Col xs={1} className="regtrationtabletext">5-Star</Col>
                            <Col xs={1} className="regtrationtabletext">24 KM</Col>
                            <Col xs={1} className="regtrationtabletext">4000</Col>
                            <Col xs={1} className="regtrationtabletext">4500</Col>
                            <Col xs={1} className="regtrationtabletext"><a href="#">Click Here</a></Col>
                            <Col xs={1} className="regtrationtabletext"><a href="#">Click Here</a></Col>
                            <Col xs={1} className="regtrationtabletext">0877 6681818</Col>
                            <Col></Col>
                        </Row>
                        <Row className="papertopicname mt-4">Note: All the tariff mentioned above are excluding GST and includes a complimentary breakfast. </Row>

                        <Row className="homeabout mt-5">Transport</Row>
                        <Row className="papertopicname mt-4">A pooled transport service from the above list of hotels (morning around 8:30am) to the conference venue and back to the hotels (evening around 5:15 pm) shall be provided. </Row>
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

export default Accomodation