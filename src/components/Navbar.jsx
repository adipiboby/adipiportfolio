import "./Nav.css";
import MenuImage from "../../pages/MenuImage";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <nav id="Navdiv">
      <div id="logodiv" onClick={() => scrollToSection("home")}>
        Portfolio
      </div>

      {/* Desktop Navigation */}
      <div id="navigeters">
        <p onClick={() => scrollToSection("home")}>HOME</p>
        <p onClick={() => scrollToSection("experience")}>PROJECTS</p>
        <p onClick={() => scrollToSection("education")}>EDUCATION</p>
        <p onClick={() => scrollToSection("contact")}>ABOUT</p>
      </div>

      {/* Mobile Menu Icon */}
      <img
        width="32"
        height="32"
        id="menuimg"
        src="https://img.icons8.com/fluency/48/menu--v3.png"
        alt="menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <MenuImage
          goTo={scrollToSection}
        />
      )}

      <div id="logodivmob">Portfolio</div>
      <div id="githubdiv">Github profile</div>
    </nav>
  );
}
