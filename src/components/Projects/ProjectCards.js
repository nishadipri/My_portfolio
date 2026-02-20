import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.techStack && props.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {props.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs rounded-full border border-purple-accent/40 text-purple-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {props.ghLink && props.ghLink !== "#" && (
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && props.demoLink !== "#" && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
