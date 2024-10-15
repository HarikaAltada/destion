import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state for menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (event, targetID) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector(".header-area").offsetHeight,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu
  };

  return (
    <div>
      <header className={`header-area ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="head">
              <h1 className="logo">
                <a href="./index.html">Destion</a>
              </h1>
            </div>
            <div className="main">
              <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <ul className="menu" id="menu">
                  <li>
                    <a
                      href="#hero"
                      onClick={(e) => handleScrollToSection(e, "hero")}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => handleScrollToSection(e, "about")}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => handleScrollToSection(e, "services")}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => handleScrollToSection(e, "contact")}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <button className="menu-toggle" onClick={toggleMenu}>
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
