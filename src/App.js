import React from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

const App = () => {
  const projects = [
    {
      title: "☎️ Contact List Apps",
      description: "Contact List Application made with React.js.",
      githubLink: "https://github.com/mwahyusp/contacts-app",
      demoLink: "https://contacts-app-nine.vercel.app/",
    },
  ];

  return (
    <div>
      <Header />
      <main style={{ maxWidth: "800px", margin: "auto" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
