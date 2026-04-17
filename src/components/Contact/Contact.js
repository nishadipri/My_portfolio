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

function Contact() {
  const [status, setStatus] = useState(STATUS.IDLE);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();

  console.log("RHF errors:", errors, "isSubmitted:", isSubmitted);

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

  const buttonLabel = {
    [STATUS.IDLE]: "Send Message",
    [STATUS.SENDING]: "Sending...",
    [STATUS.SUCCESS]: "Message Sent!",
    [STATUS.ERROR]: "Failed — Try Again",
  }[status];

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
                  style={{ width: "100%" }}
                  className={`contact-input${errors.name ? " contact-input-error" : ""}`}
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                />
                {errors.name && (
                  <span className="contact-field-error">{errors.name.message}</span>
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
                  style={{ width: "100%" }}
                  className={`contact-input${errors.email ? " contact-input-error" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="contact-field-error">{errors.email.message}</span>
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
                  style={{ width: "100%", resize: "none" }}
                  className={`contact-input${errors.message ? " contact-input-error" : ""}`}
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                  })}
                />
                {errors.message && (
                  <span className="contact-field-error">{errors.message.message}</span>
                )}
              </div>

              {status === STATUS.SUCCESS && (
                <p className="contact-success-msg" style={{ textAlign: "center" }}>
                  Thanks! I'll get back to you soon.
                </p>
              )}
              {status === STATUS.ERROR && (
                <p className="contact-error-msg" style={{ textAlign: "center" }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="contact-submit-btn"
                style={{ width: "100%", marginTop: "0.5rem", padding: "0.75rem 2rem", borderRadius: "0.5rem", fontWeight: 600 }}
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
