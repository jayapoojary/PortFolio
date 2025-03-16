import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/JayaPoojary.jpg" alt="Jaya Poojary" className="navbar-image" />
        <h1 className="navbar-title">Jaya Poojary</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/experience" className="nav-link">Experience</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/resume" className="nav-link">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
