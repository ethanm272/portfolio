import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Typewriter } from "../components/Typewriter";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`menu-btn ${isOpen ? " black" : ""}`}
        type="button"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <aside className={`menu-link-list ${isOpen ? " open" : ""}`}>
        <Link className="menu-link" to="/">
          <span className="link-number">01.</span>
          <Typewriter text="Projects" display={isOpen} />
        </Link>
        <hr className="menu-divider"></hr>
        <Link className="menu-link" to="/">
          <span className="link-number">02.</span>
          <Typewriter text="About" display={isOpen} />
        </Link>
        <hr className="menu-divider"></hr>
        <Link className="menu-link" to="/">
          <span className="link-number">03.</span>
          <Typewriter text="Contact" display={isOpen} />
        </Link>
      </aside>

      <Outlet />
    </>
  );
};
