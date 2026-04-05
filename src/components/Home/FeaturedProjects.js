import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FeaturedProjects() {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      id: 1,
      title: "Ayur Glow",
      description: "Wellness Platform",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "Meal-Sharing",
      description: "Community Food App",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 3,
      title: "Advice Generator",
      description: "Interactive API App",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 4,
      title: "Interactive Rating",
      description: "User Feedback System",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      id: 5,
      title: "Monthly Planner",
      description: "Productivity Tool",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: 6,
      title: "AWS Cloud",
      description: "Cloud Solutions",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  const handleProjectClick = () => {
    navigate("/project");
  };

  return (
    <Container fluid className="featured-projects-section">
      <Container>
        <h1 className="featured-projects-heading">
          FEATURED <span className="purple">PROJECTS</span>
        </h1>
        <p className="featured-projects-subtitle">
          Explore my recent work and innovations
        </p>
      </Container>
      
      <div className="slider-container">
        <div className="slider-track">
          {/* First set of projects */}
          {featuredProjects.map((project) => (
            <div
              key={`first-${project.id}`}
              className="project-slide"
              onClick={handleProjectClick}
              style={{ background: project.gradient }}
            >
              <div className="project-slide-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-slide-overlay">
                  <span>View Details →</span>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {featuredProjects.map((project) => (
            <div
              key={`second-${project.id}`}
              className="project-slide"
              onClick={handleProjectClick}
              style={{ background: project.gradient }}
            >
              <div className="project-slide-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-slide-overlay">
                  <span>View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FeaturedProjects;
