import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <style jsx>{`
        body {
          background-color: ${darkMode ? "#121212" : "#f9f9f9"};
          color: ${darkMode ? "#e0e0e0" : "#333"};
        }
        footer {
          background-color: ${darkMode ? "#1e1e1e" : "#333"};
        }
        .project {
          background-color: ${darkMode ? "#1e1e1e" : "#fff"};
          color: ${darkMode ? "#e0e0e0" : "#333"};
        }
      `}</style>
    </div>
  );
}

export default App;
