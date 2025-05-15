import React from "react";

function Contact() {
  return (
    <section id="contact" style={{ padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h2>Kontak</h2>
        <p>Email: mwsp@example.com</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/mwsp "
            target="_blank"
            rel="noopener noreferrer">
            github.com/mwsp
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/mwsp "
            target="_blank"
            rel="noopener noreferrer">
            linkedin.com/in/mwsp
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
