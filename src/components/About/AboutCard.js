import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dorsaf Charfeddine </span>
            from <span className="purple"> Tunisia.</span>
            <br />
            I am a passionate Full-Stack Web Developer, eager to build innovative and user-friendly web applications.
            <br />
            I recently graduated from ESPRIT with a strong background in web development technologies.
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
