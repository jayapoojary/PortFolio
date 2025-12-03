import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const title = "Software Developer";

  return (
    <nav className="navbar">
      <div className="navbar-left">

        <div className="image-wrapper">
          <img
            src="/JayaPoojary.jpg"
            alt="Jaya Poojary"
            className="navbar-image"
          />
        </div>


        <div>
          <h1 className="navbar-title">Jaya Poojary</h1>

          <motion.h2 className="navbar-subtitle">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 150,
                }}
                className="animated-letter"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>

      {/* MENU BUTTON */}
      <div className="menu-container">
        <button className="menu-button" onClick={() => setOpen(!open)}>
          ☰ Menu
        </button>

        {/* DROPDOWN MENU */}
        {open && (
          <div className="menu-dropdown">
            <Link to="/" className="dropdown-link" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" className="dropdown-link" onClick={() => setOpen(false)}>About</Link>
            <Link to="/projects" className="dropdown-link" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="/experience" className="dropdown-link" onClick={() => setOpen(false)}>Experience</Link>
            <Link to="/contact" className="dropdown-link" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/resume" className="dropdown-link" onClick={() => setOpen(false)}>Resume</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
