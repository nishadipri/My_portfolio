import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Opens the user's email client with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nish.shanika@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p className="text-center text-white mb-12">
          Feel free to reach out — I'd love to hear from you!
        </p>

        <Row className="justify-content-center">
          <Col md={6}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-accent/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-accent/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-accent transition-colors"
                  placeholder="nish.shanika@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-accent/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #623686, #8a49a8)",
                }}
              >
                {submitted ? "Opening Email Client..." : "Send Message"}
              </button>
            </form>
          </Col>

          <Col md={4} className="mt-12 md:mt-0">
            <div className="flex flex-col items-center gap-6 pt-4">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Connect With Me
              </h2>

              <a
                href="mailto:nish.shanika@gmail.com"
                className="flex items-center gap-3 text-white hover:text-purple-accent transition-colors text-lg no-underline"
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
