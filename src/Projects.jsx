import React, { useState } from "react";
const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <ul className="projects-list">
        <li
          className="project-item"
          onMouseEnter={() => setHovered("UDC")}
          onMouseLeave={() => setHovered(null)}
        >
          User Driven Corrections (UDC) - Developed the frontend with React.js
          and collaborated on backend integration.
          {hovered === "UDC" && (
            <div className="project-details">
              <h3 style={{ color: "green" }}>Overview:</h3>
              <p>
                The UDC tool empowers analysts to perform corrections during
                various stages of the cycle (in-cycle, post-cycle, and
                historical corrections).
              </p>
              <p>
                Analysts can execute generic corrections on transactions,
                modifying specific data values as needed.
              </p>
              <p>
                Deletion actions on batches and automation configuration for
                user and batch actions are supported.
              </p>
              <p>
                The Production UDC UI refreshes every 20 seconds, enhancing
                workflow efficiency.
              </p>
              <h3 style={{ color: "green" }}>
                Responsibilities in React.js Development:
              </h3>
              <p>
                Developed and maintained the frontend using React.js, HTML, CSS,
                and MUI.
              </p>
              <p>
                Implemented features for executing generic corrections, data
                value changes, and batch actions.
              </p>
              <p>
                Collaborated closely with the frontend team to ensure a seamless
                user experience.
              </p>
              <h3 style={{ color: "green" }}>
                Responsibilities in Backend Development:
              </h3>
              <p>
                Worked on the backend using Java, Spring Boot, and Scala.
              </p>
              <p>
                Developed robust server-side logic for data processing
                tasks.
              </p>
              <p>
                Ensured smooth integration between frontend and backend
                functionalities.
              </p>
              <p>
                Collaborated with other backend developers to optimize
                code and troubleshoot issues.
              </p>
            </div>
          )}
        </li>
        <li
          className="project-item"
          onMouseEnter={() => setHovered("QEM")}
          onMouseLeave={() => setHovered(null)}
        >
          Quantity Edit Matrix (QEM) - Built a dynamic UI for a healthcare
          product using React.js.
          {hovered === "QEM" && (
            <div className="project-details">
              <h3 style={{color: 'green'}}>Overview:</h3>
              <p>
                The QEM Tool: A healthcare product designed to enable clients to
                create new medical products and update existing medicines,
                streamlining the product development and enhancement process
              </p>
              <p style={{color: 'green'}}>Responsibilities: </p>
              <p>
                Utilized React.js to build a dynamic and responsive user
                interface, ensuring an intuitive and seamless user experience
              </p>
              <p>
                Managed version control and collaboration using Git, ensuring
                smooth and organized development workflow
              </p>
              <p>
                Involved in the CI/CD process, automating deployment pipelines
                to enhance productivity and reduce time to market
              </p>
              <p>
                Conducted code reviews and implemented best practices for
                code quality, maintainability, and performance optimization
              </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
export default Projects;
