import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/NishCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineOpenInNew } from "react-icons/md";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const TOTAL_PAGES = 2;

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "React · Node · AWS", label: "Core Stack" },
  { value: "Open to Work", label: "Status" },
];

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [page, setPage] = useState(1);
  const isMobile = width <= 768;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Page heading */}
      <Row className="justify-content-center" style={{ paddingBottom: "10px" }}>
        <Col xs="auto" style={{ textAlign: "center" }}>
          <h1 className="project-heading">
            My <strong className="purple">Resume</strong>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "-8px" }}>
            Last updated April 2026
          </p>
        </Col>
      </Row>

      {/* Stats strip */}
      <Row className="justify-content-center" style={{ marginBottom: "2rem", gap: "0" }}>
        {stats.map((stat, i) => (
          <Col key={i} xs={12} sm={4} md={3} style={{ textAlign: "center", padding: "0.75rem 1rem" }}>
            <div className="resume-stat-card">
              <span className="resume-stat-value">{stat.value}</span>
              <span className="resume-stat-label">{stat.label}</span>
            </div>
          </Col>
        ))}
      </Row>

      {/* Download button — top */}
      <Row className="justify-content-center" style={{ marginBottom: "1.5rem", gap: "12px" }}>
        <Col xs="auto">
          <a href={pdf} download="NishCV.pdf" className="resume-download-btn">
            <AiOutlineDownload style={{ fontSize: "1.1rem" }} />
            Download CV
          </a>
        </Col>
        <Col xs="auto">
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="resume-open-btn">
            <MdOutlineOpenInNew style={{ fontSize: "1.1rem" }} />
            Open in new tab
          </a>
        </Col>
      </Row>

      {/* PDF viewer or mobile fallback */}
      {isMobile ? (
        <Row className="justify-content-center" style={{ padding: "2rem 1rem" }}>
          <Col xs="auto" style={{ textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "1rem" }}>
              For the best reading experience, open the CV directly.
            </p>
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="resume-download-btn">
              <MdOutlineOpenInNew style={{ fontSize: "1.1rem" }} />
              View Full CV
            </a>
          </Col>
        </Row>
      ) : (
        <>
          <Row className="justify-content-center">
            <Col xs="auto">
              <div className="resume-pdf-frame">
                <Document file={pdf} className="d-flex justify-content-center">
                  <Page pageNumber={page} scale={1.7} />
                </Document>
              </div>
            </Col>
          </Row>

          {/* Page navigation */}
          <Row className="justify-content-center align-items-center" style={{ marginTop: "1.25rem", gap: "16px" }}>
            <Col xs="auto">
              <button
                className="resume-page-btn"
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                aria-label="Previous page"
              >
                <HiChevronLeft />
              </button>
            </Col>
            <Col xs="auto">
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                Page {page} of {TOTAL_PAGES}
              </span>
            </Col>
            <Col xs="auto">
              <button
                className="resume-page-btn"
                onClick={() => setPage((p) => Math.min(p + 1, TOTAL_PAGES))}
                disabled={page === TOTAL_PAGES}
                aria-label="Next page"
              >
                <HiChevronRight />
              </button>
            </Col>
          </Row>
        </>
      )}

      {/* Download button — bottom */}
      <Row className="justify-content-center" style={{ marginTop: "2rem", gap: "12px" }}>
        <Col xs="auto">
          <a href={pdf} download="NishCV.pdf" className="resume-download-btn">
            <AiOutlineDownload style={{ fontSize: "1.1rem" }} />
            Download CV
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
