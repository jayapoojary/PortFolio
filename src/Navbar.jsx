import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [theme, setTheme] = useState("dark"); // ⭐ Theme: dark/light

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const title = "Software Developer";

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme and store in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <nav className="navbar">
        <div className="navbar-left">
          
          {/* ⭐ Profile Image with Zoom */}
          <img
            src="/JayaPoojary.jpg"
            alt="Jaya Poojary"
            className="navbar-image"
            onClick={() => setZoom(true)}
            style={{ cursor: "pointer" }}
          />

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

        {/* Right section */}
        <div className="menu-container">

          {/* ⭐ Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>

          {/* Menu Button */}
          <button
            ref={buttonRef}
            className="menu-button"
            onClick={() => setOpen(!open)}
          >
            ☰ Menu
          </button>

          {/* Dropdown */}
          {open && (
            <div className="menu-dropdown" ref={menuRef}>
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

      {/* ===================== IMAGE ZOOM MODAL ===================== */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
          >
            <motion.img
              src="/JayaPoojary.jpg"
              alt="Zoomed Image"
              className="zoom-image"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.2, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
