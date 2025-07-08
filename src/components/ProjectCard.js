import React from "react";

const ProjectCard = ({ title, description, githubLink, demoLink }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "1rem",
      }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={githubLink}
        className="link-spacing"
        target="_blank"
        rel="noopener noreferrer">
        View on GitHub
      </a>
      &nbsp;
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        View on Demo
      </a>
    </div>
  );
};

export default ProjectCard;
