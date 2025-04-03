import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import englishCV from "../../Assets/../Assets/CV_Dorsaf_Charfeddine.pdf";
import frenchCV from "../../Assets/../Assets/CV_Dorsaf_Charfeddine_FR.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  const currentCV = language === "en" ? englishCV : frenchCV;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="secondary" onClick={toggleLanguage} style={{ marginBottom: "10px" }}>
            {language === "en" ? "Switch to French" : "Switch to English"}
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={currentCV} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={currentCV} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={currentCV} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
