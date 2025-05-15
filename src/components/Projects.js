import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h2>Projek Mini</h2>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}>
          <h4>Kalkulator Sederhana</h4>
          <p>Dibuat dengan HTML, CSS, dan JavaScript dasar</p>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}>
          <h4>To-do List App</h4>
          <p>Aplikasi daftar tugas sederhana menggunakan localStorage</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
