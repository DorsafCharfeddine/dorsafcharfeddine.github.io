import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girl_icon.png"; // Make sure this is the correct path to your avatar image
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">SAP HCM Consultant</b> and a Full-Stack Developer, focused on building reliable HR/ERP solutions and user-friendly web applications.
              <br />
              <br />I work on <b className="purple">SAP HCM (Time Management, Payroll support)</b>, ABAP developments, integrations, and I also build modern web apps.
              <br />
              <br />
              I’m fluent in{" "}
              <i>
                <b className="purple">Java, JavaScript, and TypeScript.</b>
              </i>
              <br />
              <br />
              And have hands-on experience with{" "}
              <i>
                <b className="purple">React, Angular, Spring Boot, Node.js.</b>
              </i>
              <br />
              <br />
              Feel free to connect for collaboration.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/DorsafCharfeddine" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://www.linkedin.com/in/dorsaf-charfeddine-94a0841bb/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
