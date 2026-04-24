import React from "react";

const Projects = () => {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="project-card">
        <h3>Car Price Prediction</h3>
        <p>
          Built a machine learning model to predict used car prices using
          regression techniques. Performed EDA, preprocessing, and model evaluation.
        </p>
        <a href="https://github.com/your-username/car-price-prediction" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>Student Performance Prediction</h3>
        <p>
          Developed a model to predict student scores based on study hours,
          attendance, and other factors using regression algorithms.
        </p>
        <a href="https://github.com/your-username/student-performance" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>URL Shortener</h3>
        <p>
          Built a full-stack URL shortening service using FastAPI with secure
          link generation, analytics, and GeoIP tracking.
        </p>
        <a href="https://github.com/your-username/url-shortener" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>

    </div>
  );
};

export default Projects;