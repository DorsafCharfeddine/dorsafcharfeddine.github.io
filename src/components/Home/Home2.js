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
              I’m a passionate Full-Stack Web Developer with a drive for creating innovative and user-friendly web applications. I recently graduated from ESPRIT and am eager to apply and further develop my skills in a professional setting.
              <br />
              <br />
              I’m fluent in languages like
              <i>
                <b className="purple"> Java, JavaScript, and TypeScript.</b>
              </i>
              <br />
              <br />
              And have hands-on experience with libraries and frameworks such as
              <i>
                <b className="purple"> React, Angular, Spring Boot, Node.js. </b>
              </i>
              <br />
              <br />
              As well as working with databases like
              <b className="purple"> MongoDB, PostgreSQL, and MySQL.</b>
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
