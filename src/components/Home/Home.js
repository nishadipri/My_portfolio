import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";
import ProjectCard from "../Projects/ProjectCards";
import projects from "../../data/projects";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      {/* ── Hero ── */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NISHADI SAMARATHUNGE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="home-image-container">
              <img
                src={homeLogo}
                alt="Nishadi Samarathunge — portfolio hero image"
                className="img-fluid home-main-image"
                style={{ maxHeight: "500px", width: "auto", display: "block", margin: "0 auto" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ── Introduce myself ── */}
      <Home2 />

      {/* ── Skills & Tools ── */}
      <Container fluid className="about-section home-mid-section" id="skills">
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>
          <Toolstack />
        </Container>
      </Container>

      {/* ── Projects ── */}
      <Container fluid className="project-section home-mid-section" id="projects">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p className="section-subtext">
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* ── Days I Code ── */}
      <Container fluid className="about-section home-mid-section" id="github">
        <Container>
          <Github />
        </Container>
      </Container>

      {/* ── Find me on ── */}
      <Container fluid className="home-about-section" id="connect">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/nishadipri"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/nishadi-samarathunge"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
