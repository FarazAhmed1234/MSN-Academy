import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar1.css";
import logo from "../assets/MSN_Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="msn-navbar">
      {/* Logo */}
      <div className="msn-logo">
        <img src={logo} alt="MSN Academy Logo" />
      </div>

      {/* Hamburger menu */}
      <div
        className={`msn-hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`msn-nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "msn-active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "msn-active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificate"
            className={({ isActive }) => (isActive ? "msn-active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Certificate
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "msn-active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="msn-nav-buttons">
        <button className="msn-join-btn" onClick={() => navigate("/courses")}>
          Join
        </button>
        <button className="msn-learn-btn" onClick={() => navigate("/")}>
          Learn
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className={`msn-nav-buttons-mobile ${isMenuOpen ? "show" : ""}`}>
        <button className="msn-join-btn" onClick={() => navigate("/courses")}>
          Join
        </button>
        <button className="msn-learn-btn" onClick={() => navigate("/")}>
          Learn
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
