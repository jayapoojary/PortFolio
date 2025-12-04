import { motion } from "framer-motion";
//import "./Home.css";

const Home = () => {
  const techStack = [
    "React.js",
    "C#",
    "ASP.NET Core",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",  
    "SQL Server",
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Portfolio</h1>

      <p className="home-description">
        I'm a Full Stack Developer passionate about crafting intuitive interfaces
        and high-performance applications using React.js on the front end and
        C# with ASP.NET Core on the back end.
      </p>

      {/* ⭐ Animated Tech Badges */}
      <motion.div
        className="tech-icons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {techStack.map((tech, index) => (
          <motion.span
            key={index}
            className="tech-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
