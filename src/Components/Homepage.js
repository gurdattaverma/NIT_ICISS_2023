import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col, Carousel } from "react-bootstrap"
import nitimg1 from "./Images/nit1.jpg"
import nitimg2 from "./Images/nit2.jpg"
import nitimg3 from "./Images/nit3.jpg"
import nitimg4 from "./Images/nit4.jpg"
import tourism1 from "./Images/Tourism/1.jpg"
import tourism2 from "./Images/Tourism/2.jpg"
import tourism3 from "./Images/Tourism/3.jpg"
import tourism4 from "./Images/Tourism/4.jpg"
import tourism5 from "./Images/Tourism/5.jpg"
import tourism6 from "./Images/Tourism/6.jpg"
import tourism7 from "./Images/Tourism/7.jpg"
import tourism8 from "./Images/Tourism/8.jpg"
import tourism9 from "./Images/Tourism/9.jpg"
import tourism10 from "./Images/Tourism/10.jpg"
import newgif from "./Images/new.gif"
import dummypic from "./Images/dummypic.png"
import { FaCalendarAlt } from "react-icons/fa"

const Homepage = () => {

    return (
        <>
            <Row>
                <Navigation />
            </Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col sm className=" mt-3">
                    <Carousel fade className="tourismbox">
                        <Carousel.Item interval='2000' >
                            <img
                                className="d-block w-100"
                                src={nitimg1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval='2000' >
                            <img
                                className="d-block w-100"
                                src={nitimg2}
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval='2000' >
                            <img
                                className="d-block w-100"
                                src={nitimg3}
                                alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval='2000' >
                            <img
                                className="d-block w-100"
                                src={nitimg4}
                                alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col xs={1}></Col>
            </Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col >
                    <Row className="keynotespeakerhead mt-3">Keynote and Invited Speakers</Row>
                    <Row className="eventmobmargin mt-5">
                        <Col xs={1}></Col>
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
                            </Row>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                    <Row className="eventmobmargin mt-5">
                        <Col xs={1}></Col>
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
                            </Row>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col sm className="mx-3">
                    <Row className="latestnewhead justify_content_center  mt-3">Latest News</Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1}>
                            <img src={newgif} alt="" />
                        </Col>
                        <Col className="latestnewtext mx-3">ICISS Technical Program</Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1}>
                            <img src={newgif} alt="" />
                        </Col>
                        <Col className="latestnewtext mx-3">Visa Related Instructions</Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1}>
                            <img src={newgif} alt="" />
                        </Col>
                        <Col className="latestnewtext mx-3">Travel and Venue</Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1}>
                            <img src={newgif} alt="" />
                        </Col>
                        <Col className="latestnewtext mx-3">Hostel & Hotel Accomodation Details</Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1}>
                            <img src={newgif} alt="" />
                        </Col>
                        <Col className="latestnewtext mx-3">Download Proceedings of ICISS 2022 (273-Page Book, Available until Dec 31, 2022)</Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1}>
                            <img src={newgif} alt="" />
                        </Col>
                        <Col className="latestnewtext mx-3">Download ICISS 2022 Flyer</Col>
                    </Row>
                </Col>
                <Col xs={1}></Col>
                <Col>
                    <Row className="latestnewhead justify_content_center  mt-3">Importatnt Days</Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1} className="importantdatetext">
                            <FaCalendarAlt />
                        </Col>
                        <Col className="importantdatetext">	Call for papers: Mar 14, 2023</Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1} className="importantdatetext">
                            <FaCalendarAlt />
                        </Col>
                        <Col className="importantdatetext">Submission Deadline: Jul 20, 2023 </Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1} className="importantdatetext">
                            <FaCalendarAlt />
                        </Col>
                        <Col className="importantdatetext">Acceptance Notification: Sep 15, 2023 </Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1} className="importantdatetext">
                            <FaCalendarAlt />
                        </Col>
                        <Col className="importantdatetext">Camera Ready: Sep 25, 2023</Col>
                    </Row>
                    <Row className="latestnewborderbelow mt-3" >
                        <Col xs={1} className="importantdatetext">
                            <FaCalendarAlt />
                        </Col>
                        <Col className="importantdatetext">Conference: Dec 16-20, 2023 </Col>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>

            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col sm className="mx-3">

                    <Row className="latestnewhead justify_content_center  mt-5">Sponsorships</Row>
                </Col>
                <Col xs={1}></Col>
                <Col sm className="mx-3">
                    <Row className="latestnewhead justify_content_center  mt-5">Publishing Partner</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col sm className="mx-3">
                <Row className="latestnewhead justify_content_center  mt-5">Tourist Attractions</Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
            
            <Row className="mt-5">
                <Col xs={2}></Col>
                <Col sm className="mx-3">

                    <Row className="mt-3">
                        <a href="https://www.chhattisgarhtourism.in/" target="_blank">
                            <Carousel fade className="tourismbox">
                                <Carousel.Item interval='2000' >
                                    <a href="https://www.chhattisgarhtourism.in/">
                                        <img
                                            className="d-block w-100"
                                            src={tourism3}
                                            alt="First slide"
                                        />
                                    </a>
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism4}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism5}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism6}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism2}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism8}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism9}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism10}
                                        alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval='2000' >
                                    <img
                                        className="d-block w-100"
                                        src={tourism1}
                                        alt=""
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </a>
                    </Row>
                </Col>
                <Col xs={2}></Col>
            </Row>

            <Row className="mt-5">
                <Col xs={1}></Col>
                <Col sm>
                    <Row className="homeabout">About ICISS</Row>
                    <Row className="homeabouttext mt-3">
                        The International Conference on Information Systems Security (ICISS), held annually in India, is a forum for the dissemination of research results and a place for meeting finer minds on computer security. ICISS 2023, the 18th edition of the conference, will be held at IIT Tirupati in the city of Tirupati from December 16 to 20, 2023. The conference will include a high quality technical papers, a set of visionary/invited papers on important and timely topics from well-known leaders in the field, and a session on the work in progress. Alongside the broader objectives, the ICISS 2023 emphasizes enhancing the cooperation between India and Australia on information security research activity. The conference therefore invites the researchers and security enthusiasts to take advantage of the forum to share and discuss the subject concerns to the topic of computer security.
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

export default Homepage