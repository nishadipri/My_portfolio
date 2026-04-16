import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(STATUS.IDLE);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.SUCCESS);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    } catch {
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  }

  const buttonLabel = {
    [STATUS.IDLE]: "Send Message",
    [STATUS.SENDING]: "Sending...",
    [STATUS.SUCCESS]: "Message Sent!",
    [STATUS.ERROR]: "Failed — Try Again",
  }[status];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p className="text-center mb-12 contact-subtext">
          Feel free to reach out — I'd love to hear from you!
        </p>

        <Row className="justify-content-center">
          <Col md={6}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-lg contact-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === STATUS.SENDING}
                  className="w-full px-4 py-3 rounded-lg contact-input transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-lg contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === STATUS.SENDING}
                  className="w-full px-4 py-3 rounded-lg contact-input transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-lg contact-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={status === STATUS.SENDING}
                  className="w-full px-4 py-3 rounded-lg contact-input transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status === STATUS.SUCCESS && (
                <p className="text-center contact-success-msg">
                  Thanks! I'll get back to you soon.
                </p>
              )}
              {status === STATUS.ERROR && (
                <p className="text-center contact-error-msg">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === STATUS.SENDING}
                className="mt-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 contact-submit-btn"
              >
                {buttonLabel}
              </button>
            </form>
          </Col>

          <Col md={4} className="mt-12 md:mt-0">
            <div className="flex flex-col items-center gap-6 pt-4">
              <h2 className="text-2xl font-semibold mb-4 contact-side-title">
                Connect With Me
              </h2>

              <a
                href="mailto:nish.shanika@gmail.com"
                className="flex items-center gap-3 transition-colors text-lg no-underline contact-side-link"
                aria-label="Email"
              >
                <AiFillMail className="text-2xl" />
                nish.shanika@gmail.com
              </a>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/nishadipri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishadi-samarathunge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/nishmnp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
