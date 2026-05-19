import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ProfilePic.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="intro-heading">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">full-stack developer</b> based in{" "}
              <b className="purple">Copenhagen</b>, focused on building responsive,
              user-friendly web applications with{" "}
              <i>
                <b className="purple">React, Next.js, TypeScript, JavaScript, Node.js, and AWS.</b>
              </i>
              <br />
              <br />
              I come from a <b className="purple">healthcare background</b>, which shaped
              the way I think about people, communication, trust, and real user needs.
              <br />
              <br />
              Today, I bring that <b className="purple">human-centered mindset</b> into
              software development,building digital products that are clear, practical,
              scalable, and meaningful for real users.
              <br />
              <br />
              I'm especially interested in{" "}
              <i>
                <b className="purple">health tech, ed-tech, AI-powered tools,</b>
              </i>{" "}
              and modern web applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt aria-label="Profile photo of Nishadi Samarathunge">
              <img src={myImg} className="img-fluid" alt="Nishadi Samarathunge — Software Developer" loading="lazy" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
