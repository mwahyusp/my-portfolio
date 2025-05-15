import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <header
      style={{
        background: darkMode ? "#1e1e1e" : "#0d6efd",
        color: "white",
        padding: "40px 0",
        textAlign: "center",
      }}>
      <h1>Halo, Saya MWSP</h1>
      <p>Frontend Developer | Pengalaman 1 Tahun</p>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginTop: "10px" }}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
