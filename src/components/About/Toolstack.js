import React, { useRef, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const rowRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const iconClass = `tech-icons${inView ? " in-view" : ""}`;

  return (
    <Row ref={rowRef} style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className={iconClass}><SiMacos /></Col>
      <Col xs={4} md={2} className={iconClass}><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className={iconClass}><SiPostman /></Col>
      <Col xs={4} md={2} className={iconClass}><SiSlack /></Col>
    </Row>
  );
}

export default Toolstack;
