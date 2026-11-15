import { useState, useEffect, useRef } from "react";
import "../styles/NavigationBar.css";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelopeFill,
  BsList,
  BsXLg,
} from "react-icons/bs";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="navigation-bar">
      <nav aria-label="Main navigation">
        <div className="nav-left">
          <a
            title="Philipp Metz"
            href="#home"
            className="nav-brand"
            onClick={closeMenu}
          >
            Philipp Metz
          </a>
          <ul
            id="nav-links"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <ul className="nav-icons">
            <li>
              <a
                title="Email"
                aria-label="Send email to Philipp Metz"
                href="mailto:hello@philipp-metz.com"
              >
                <BsEnvelopeFill size={19} />
              </a>
            </li>
            <li>
              <a
                title="GitHub"
                aria-label="GitHub"
                href="https://github.com/Philipp-Metz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={19} />
              </a>
            </li>
            <li>
              <a
                title="LinkedIn"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/metz-philipp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin size={19} />
              </a>
            </li>
          </ul>

          <button
            ref={toggleButtonRef}
            type="button"
            className="nav-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <BsXLg size={20} /> : <BsList size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
