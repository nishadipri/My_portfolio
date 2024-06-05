import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Meal-Sharing"
              description="Welcome to Meal Sharing Project, a dynamic full-stack web application built with cutting-edge technologies including ReactJs, Express.js, CSS and PostgreSQL."
              ghLink="https://github.com/nishadipri/Meal-Sharing-Project"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Advice Generator"
              description="This app fetches random advice from the Advice Slip API. Users can generate their own advice. It is built with React.js and deployed on Netlify."
              ghLink="https://github.com/nishadipri/Advice-Generator-app"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Interactive Rating System"
              description="This is a web app that allows users to create a rating system. It is built with React.js and deployed on Netlify."
              ghLink="https://github.com/nishadipri/InteractiveRating"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Monthly Planner"
              description="This is a web app that allows users to create a monthly planner."
              ghLink="https://github.com/nishadipri/Monthly-Planner"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
