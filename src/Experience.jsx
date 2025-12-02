const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>

      <p className="experience-subtitle">
        Fullstack Software Engineer at Consilio (Aug, 2025 - Present)
      </p>
      <ul className="experience-list">
        <li>Developing enterprise applications using React.js for frontend and ASP.NET Core for backend.</li>
        <li>Building reusable UI components with Tailwind CSS and MUI.</li>
        <li>Designing and implementing RESTful APIs using ASP.NET Core Web API.</li>
        <li>Working with SQL Server, Entity Framework, and LINQ for data operations.</li>
        <li>Participating in CI/CD pipelines, deployments, and Azure DevOps workflows.</li>
      </ul>

      <p className="experience-subtitle">
        Software Developer at IQVIA (Sep, 2022 - Aug, 2025)
      </p>
      <ul className="experience-list">
        <li>Developed and maintained web applications using React.js, Tailwind CSS, and MUI.</li>
        <li>Implemented Redux-Thunk for efficient state management and performance optimization.</li>
        <li>Created and consumed backend services using ASP.NET Core Web API.</li>
        <li>Worked with SQL Server, stored procedures, and Entity Framework Core.</li>
        <li>Worked with CI/CD pipelines and deployed applications using Azure.</li>
      </ul>
    </div>
  );
};

export default Experience;
