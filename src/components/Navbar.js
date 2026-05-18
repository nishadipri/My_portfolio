import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar({ theme, toggleTheme }) {
  const [navColour, updateNavbar] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  function close() {
    setExpanded(false);
  }

  function handleProjectsClick(e) {
    e.preventDefault();
    close();
    if (location.pathname === "/") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }

  return (
    <Navbar
      fixed="top"
      expand="md"
      expanded={expanded}
      onToggle={setExpanded}
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Mobile only: theme toggle + hamburger on the right */}
        <div className="d-flex align-items-center gap-2 ms-auto d-md-none">
          <Button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
          </Button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler-custom" />
        </div>

        {/* Nav links — visible on desktop, collapsible on mobile */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => { close(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#projects" onClick={handleProjectsClick}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={close}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={close}>
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/nishadipri"
                target="_blank"
                className="fork-btn-inner"
                onClick={close}
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            {/* Theme toggle — desktop only */}
            <Nav.Item className="theme-toggle-nav-item d-none d-md-flex">
              <Button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
