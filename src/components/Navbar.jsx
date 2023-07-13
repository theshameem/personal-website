import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav-menu show-menu" : "nav-menu"}`}>
        <ul className="nav-list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav-toggle animate-toggle" : "nav-toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {!showMenu ? <BiMenuAltRight size={30} /> : <GrFormClose size={30} />}
      </div>
    </nav>
  );
}

export default Navbar;
