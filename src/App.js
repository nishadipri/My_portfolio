import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import CursorEffect from "./components/CursorEffect";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/globals.css";
import "./styles/preloader.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/projects.css";
import "./styles/featured-projects.css";
import "./styles/resume.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/theme.css";
import "./styles/error-boundary.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  const [load, setLoad] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLightTheme ? "light" : "dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === "dark" ? "light" : "dark"));
  }

  return (
    <ErrorBoundary>
      <Router>
        <Preloader load={load} />
        <CursorEffect />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <ScrollToTop />
          <Suspense fallback={<Preloader load={true} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
