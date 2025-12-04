import { useState } from 'react';
import './App.css';
import Contact from './Contact';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import Resume from './Resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("dark");  // ⭐ theme state

  return (
    <div className={`app-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
