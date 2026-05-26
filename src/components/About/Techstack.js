import React, { useRef, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiAmazonaws,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

function Techstack() {
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
      <Col xs={4} md={2} className={iconClass}><DiJavascript1 /></Col>
      <Col xs={4} md={2} className={iconClass}><FaHtml5 /></Col>
      <Col xs={4} md={2} className={iconClass}><FaCss3Alt /></Col>
      <Col xs={4} md={2} className={iconClass}><DiMysql /></Col>
      <Col xs={4} md={2} className={iconClass}><SiTypescript /></Col>
      <Col xs={4} md={2} className={iconClass}><SiTailwindcss /></Col>
      <Col xs={4} md={2} className={iconClass}><DiNodejs /></Col>
      <Col xs={4} md={2} className={iconClass}><DiReact /></Col>
      <Col xs={4} md={2} className={iconClass}><DiMongodb /></Col>
      <Col xs={4} md={2} className={iconClass}><SiNextdotjs /></Col>
      <Col xs={4} md={2} className={iconClass}><DiGit /></Col>
      <Col xs={4} md={2} className={iconClass}><SiPostgresql /></Col>
      <Col xs={4} md={2} className={iconClass}><SiBootstrap /></Col>
      <Col xs={4} md={2} className={iconClass}><SiAmazonaws /></Col>
    </Row>
  );
}

export default Techstack;
