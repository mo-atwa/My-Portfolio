import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <nav className={`navbar ${isMenuOpen ? "nav-open" : ""}`}>
      <div className="nav-brand">Mohamed Atwa</div>
      <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={activeSection === item.toLowerCase() ? "active" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
