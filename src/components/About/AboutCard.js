import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishadi Samarathunge </span>
            from <span className="purple"> Copenhagen, Denmark.</span>
            <br />
            I have finished the full stack development bootcamp at Hack Your Future.
            
            <br />
            I have completed Bachelor degree in Ayurveda Medicine and Surgery
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Public speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Crocheting
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new cafes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "unlocking the doors to endless innovation!"{" "}
          </p>
          <footer className="blockquote-footer">Nishadi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
