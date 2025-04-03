import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import youthConnect from "../../Assets/Projects/yc.png";
import emotion from "../../Assets/Projects/emotion.png";
import progress from "../../Assets/Projects/progress.png";
import baseEcu from "../../Assets/Projects/base_ecu.png";
import rh_app from "../../Assets/Projects/rh_app.png";
import jobMate from "../../Assets/Projects/jobMate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baseEcu}
              isBlog={false}
              title="Base ECU"
              description="A web application for managing electronic vehicle developments, including menu generation for integration into diagnostic tools. Built with Angular and Spring Boot, it features XML import and validation, RESTful APIs, and PostgreSQL for data storage. The system ensures secure authentication, role-based access, and an optimized user experience with Material UI and Toastr notifications. Perl was used for automation tasks, enhancing data processing and integration workflows."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobMate}
              isBlog={false}
              title="JobMate"
              description="A microservices-based web application designed to connect freelancers with job opportunities. It enables job discovery, application tracking, and seamless client interactions while ensuring scalability and flexibility. The system is built using Spring Boot for backend services, Angular for the frontend, and Node.js for specific integrations. H2 is used for lightweight database management, supporting rapid development and testing. The architecture promotes modularity, making it adaptable to future enhancements and expansions."
              ghLink="https://github.com/DorsafCharfeddine/microservice_projectFreelance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={progress}
              isBlog={false}
              title="OpportunityTrack"
              description="A commercial opportunity management platform that continuously scans incoming emails to identify and extract offers containing specific keywords. The system automatically stores relevant offers in a database and allows scheduled dispatch of these offers to designated recipients on a daily basis. Built with Spring Boot for backend processing, Angular for an intuitive user interface, and MySQL for structured data storage, the application streamlines opportunity tracking and enhances workflow automation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youthConnect}
              isBlog={false}
              title="YouthConnect"
              description="A dynamic web platform designed to connect young people with opportunities for personal growth and well-being. Built using React, Node.js, Express.js, and MongoDB, the application provides access to various activities, courses, events, and mental health resources. With WebSocket-powered real-time chat, users can engage with like-minded individuals, explore digital libraries, join events, and take courses to learn or practice hobbies."
              ghLink="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rh_app}
              isBlog={false}
              title="HR Test Application"
              description="An HR recruitment platform that enables HR teams to organize interviews and evaluate candidates efficiently. The system allows recruiters to schedule interviews, assign tests, and automatically calculate scores based on candidate responses. Built with Java, and JavaScript, the platform streamlines the hiring process by providing structured assessments, real-time scoring, and candidate tracking."
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
