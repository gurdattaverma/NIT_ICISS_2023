import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"
import dummypic from "./Images/dummypic.png"

const Keynote = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>

            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Keynote Speakers</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="eventmobmargin mt-5">
                        <Col xs={3}></Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                    <Row className="eventmobmargin mt-5">
                        <Col xs={3}></Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row >

            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabout justify_content_center">Invited Speakers</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="eventmobmargin mt-5">
                        <Col xs={3}></Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                    <Row className="eventmobmargin mt-5">
                        <Col xs={3}></Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col sm>
                            <Row >
                                <Row className=" ">
                                    <div className="justify_content_center">
                                        <img src={dummypic} alt="" className='kenoteimg ' />
                                    </div>
                                </Row>
                                <Row className="keynotename justify_content_center mt-3">
                                    Name
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Institute
                                </Row>
                                <Row className="keynotename justify_content_center mt-1">
                                    Address
                                </Row>
                                <Row className="mt-3">
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Brief-Bio</button>
                                    </Col>
                                    <Col className="justify_content_center">
                                        <button className="keynotedetailbtn">Abstract</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs={3}></Col>
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

export default Keynote