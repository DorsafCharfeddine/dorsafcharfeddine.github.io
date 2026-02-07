import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Dorsaf Charfeddine</span> from <span className="purple">Tunisia</span>.
            <br />
            I’m a Software Engineer with experience in <span className="purple">SAP HCM</span> and <span className="purple">ABAP</span>, interested in building modern web applications and contributing to <span className="purple">HRIS and ERP</span> projects.
            <br />
            I graduated from ESPRIT with a strong foundation in web development technologies.
            <br />
            <br />
            Apart from coding, here are some of the activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
          </ul>
          {/* <p style={{ color: "rgb(155 126 172)" }}>"Strive to build things that make a difference!"</p>
          <footer className="blockquote-footer">Dorsaf Charfeddine</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
