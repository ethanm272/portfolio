import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
        <div className="menu-divider"></div>
        <Link className="menu-link" to="/">
          <span className="link-number">01.</span>
          <span className="link-name">Projects</span>
        </Link>
        <hr className="menu-divider"></hr>
        <Link className="menu-link" to="/">
          <span className="link-number">02.</span>
          <span className="link-name">Abouts</span>
        </Link>
        <hr className="menu-divider"></hr>
        <Link className="menu-link" to="/">
          <span className="link-number">03.</span>
          <span className="link-name">Projects</span>
        </Link>
        <hr className="menu-divider"></hr>
      </aside>

      <Outlet />
    </>
  );
};
