import React from "react"
import "./Style.css"
import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"
import tutorialschedule from "./Images/tutorialschedule.png"

const Tutorialprogram = () => {

    return (
        <>
            <Row className="mb-5">
                <Navigation />
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-3">
                <Col xs={1}></Col>
                <Col >
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">List of Tutorials</Row>
                    </Row>
                    <ol>
                        <li className="">Techniques of Malware Design/Deployment (Kaspersky Labs)</li>
                        <li className="mt-1">An Introduction to Mitre Att&ck Framework (Qualys Lab)</li>
                        <li className="mt-1">An Overview of Encrypted Traffic Analysis for Cyber Security (Vehere Technology)</li>
                        <li className="mt-1">Secure Digital Transformation Leveraging Aadhaar (eMudhra)</li>
                    </ol>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Program Schedule of Tutorials</Row>
                        <img src={tutorialschedule} alt="" />
                    </Row>
                    <Row className="homeabouttext mt-4">
                        <Row className="homeabout">Details of the Tutorials</Row>
                        <Row className="homeabout mt-2">1. Techniques of Malware Design/Deployment</Row>
                        <p className="mt-3"><b>Resource person & Affiliation: </b>Saurabh Sharma, Kaspersky </p>
                        <p><b>Duration: </b> 12 hours  </p>
                        <p><b>Abtract: </b> Malware (short for malicious software) refers to any program that is deliberately created to perform an unauthorized, often harmful, action. Malware is used in most cyberattacks happening nowadays, be it cybercrime or nation-state cyber warfare. As an example, in a nation-state cyber attack, a trojan can be used to provide a backdoor access to steal sensitive information from a government’s network or disrupt services at national critical infrastructure. Ransomware is another example of destructive malware used to encrypt files on computer systems of an organization to demand money in return for decryption of the files. As the political and financial stakes become higher, the sophistication and robustness of both the cyber defense mechanisms and the malware technologies with the respective operation models have also increased therefore it is extremely important to study the techniques behind malware development and deployment in order to better understand cyberattacks and develop effective countermeasures. As the cyber security industry evolved, the malware authors upped their game to remain under the radar by introducing innovative techniques. On the other hand, fundamental development blocks of malware remained unchanged and can be broadly classified into the below categories. The tutorial will be a mix of theory and a live demo of design and deployment techniques observed in real-world attack scenarios. </p>
                        <p><b>Modules: </b></p>
                        <ol className="mx-5">
                            <li className="">Covert Malware Launching</li>
                            <li className="mt-1">Data Encoding</li>
                            <li className="mt-1">Anti Reverse Engineering</li>
                            <li className="mt-1">Spear Phishing Attachment</li>
                            <li className="mt-1">Exploitation of Remote Services</li>
                            <li className="mt-1">Supply chain attack</li>
                            <li className="mt-1">Watering hole attack</li>
                        </ol>
                        <p><b>Prerequisites: </b></p>
                        <ol className="mx-5">
                            <li className="">Basic knowledge of C/C++ programming language</li>
                            <li className="mt-1">Basic familiarity with Intel Assembly language</li>
                            <li className="mt-1">Knowledge of programming fundamentals for Windows OS</li>
                            <li className="mt-1">Laptop with Virtualbox running Windows7/Windows 10</li>
                            <li className="mt-1"><span>Visual Studio 2019 (Community) installed within the Windows7/10 virtual machine </span> <a href="https://visualstudio.microsoft.com/vs/older-downloads/" target="_blank"><span className="papertopicnameblue">https://visualstudio.microsoft.com</span></a> </li>
                            <li className="mt-1"><span>Free IDA Pro version </span> <a href="https://hex-rays.com/ida-free/" target="_blank"><span className="papertopicnameblue">https://hex-rays.com/ida-free/</span></a> </li>
                        </ol>
                        <p><b>About the Resource Person: </b>Saurabh Sharma is a senior security researcher at the Global Research and Analysis Team (GReAT) in Kaspersky. He contributes to the GReAT team’s mission by helping to investigate the most active and advanced threat actors, targeted attacks, attacker tools, and more. Saurabh’s professional passions include reverse engineering malware, as well as uncovering, tracking, and analyzing APT campaigns, and providing technical reports. Saurabh has previously spoken at various international infosec conferences in India and abroad.</p>
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

export default Tutorialprogram