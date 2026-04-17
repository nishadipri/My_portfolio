import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
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

const errorStyle = {
  display: "block",
  color: "#f87171",
  fontSize: "0.85rem",
  marginTop: "0.35rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(200,137,230,0.3)",
  color: "#ffffff",
  fontSize: "1rem",
  outline: "none",
};

const inputErrorStyle = {
  ...inputStyle,
  border: "1px solid #f87171",
};

function Contact() {
  const [status, setStatus] = useState(STATUS.IDLE);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setStatus(STATUS.SENDING);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.SUCCESS);
      reset();
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  }

  const isSending = status === STATUS.SENDING;

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
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

              {/* Name */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="name" className="contact-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  disabled={isSending}
                  placeholder="Your name"
                  style={errors.name ? inputErrorStyle : inputStyle}
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                />
                {errors.name && (
                  <span style={errorStyle}>{errors.name.message}</span>
                )}
              </div>

              {/* Email */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="email" className="contact-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  disabled={isSending}
                  placeholder="your@email.com"
                  style={errors.email ? inputErrorStyle : inputStyle}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span style={errorStyle}>{errors.email.message}</span>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="message" className="contact-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  disabled={isSending}
                  placeholder="Your message..."
                  style={{ ...(errors.message ? inputErrorStyle : inputStyle), resize: "none" }}
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                  })}
                />
                {errors.message && (
                  <span style={errorStyle}>{errors.message.message}</span>
                )}
              </div>

              {status === STATUS.SUCCESS && (
                <p style={{ color: "#4ade80", textAlign: "center", marginBottom: "1rem" }}>
                  Thanks! I'll get back to you soon.
                </p>
              )}
              {status === STATUS.ERROR && (
                <p style={{ color: "#f87171", textAlign: "center", marginBottom: "1rem" }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="contact-submit-btn"
                style={{ width: "100%", marginTop: "0.5rem", padding: "0.75rem 2rem", borderRadius: "0.5rem", fontWeight: 600, cursor: isSending ? "not-allowed" : "pointer" }}
              >
                {isSending ? "Sending..." : status === STATUS.SUCCESS ? "Message Sent!" : status === STATUS.ERROR ? "Failed — Try Again" : "Send Message"}
              </button>
            </form>
          </Col>

          <Col md={4} className="mt-12 md:mt-0">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", paddingTop: "1rem" }}>
              <h2 className="contact-side-title" style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
                Connect With Me
              </h2>

              <a
                href="mailto:nish.shanika@gmail.com"
                className="contact-side-link"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", textDecoration: "none" }}
                aria-label="Email"
              >
                <AiFillMail style={{ fontSize: "1.5rem" }} />
                nish.shanika@gmail.com
              </a>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                <a href="https://github.com/nishadipri" target="_blank" rel="noopener noreferrer" className="icon-colour home-social-icons" aria-label="GitHub">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/nishadi-samarathunge" target="_blank" rel="noopener noreferrer" className="icon-colour home-social-icons" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/nishmnp/" target="_blank" rel="noopener noreferrer" className="icon-colour home-social-icons" aria-label="Instagram">
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
