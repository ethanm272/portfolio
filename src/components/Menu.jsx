import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Typewriter } from "../components/Typewriter";

export const Menu = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toCapitalCase = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const generateFirstNavLink = (s) => {
    if (s === "home") {
      return "/";
    }
    return `/${s}`;
  };

  return (
    <>
      <button
        className={`menu-btn ${isOpen ? " cream" : ""}`}
        type="button"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <aside className={`menu ${isOpen ? " open" : ""}`}>
        <div className="menu-link-list">
          <Link className="menu-link" to={generateFirstNavLink(pages[0])}>
            <span className="link-number">01.</span>
            <Typewriter text={toCapitalCase(pages[0])} display={isOpen} />
          </Link>
          <hr className="menu-divider"></hr>
          <Link className="menu-link" to={`/${pages[1]}`}>
            <span className="link-number">02.</span>
            <Typewriter text={toCapitalCase(pages[1])} display={isOpen} />
          </Link>
          <hr className="menu-divider"></hr>
          <Link className="menu-link" to={`/${pages[2]}`}>
            <span className="link-number">03.</span>
            <Typewriter text={toCapitalCase(pages[2])} display={isOpen} />
          </Link>
        </div>
      </aside>

      <Outlet />
    </>
  );
};
