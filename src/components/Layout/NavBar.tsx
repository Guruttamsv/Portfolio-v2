import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaBriefcase,
  FaQuestionCircle,
  FaEnvelope,
} from "react-icons/fa";
import "../CSS/Layout/NavBar.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-toggle" onClick={toggleNav}>
        <span className="sidebar-toggle-icon">&#9776;</span>
      </div>
      <ul className={`sidebar-menu ${isOpen ? "visible" : "hidden"}`}>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-0}
            duration={1000}
            onClick={toggleNav}
          >
            <FaHome />
            {isOpen && <span>Hi, About Me</span>}
          </Link>
        </li>
        <li>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={20}
            duration={1000}
            onClick={toggleNav}
          >
            <FaBriefcase />
            {isOpen && <span>My Work</span>}
          </Link>
        </li>
        <li>
          <Link
            to="whatsnext"
            spy={true}
            smooth={true}
            offset={20}
            duration={1000}
            onClick={toggleNav}
          >
            <FaQuestionCircle />
            {isOpen && <span>Why Me</span>}
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={40}
            duration={1000}
            onClick={toggleNav}
          >
            <FaEnvelope />
            {isOpen && <span>Get in Touch</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
