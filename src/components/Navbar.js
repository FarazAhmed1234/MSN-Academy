import React, { useState } from "react";
import { NavLink } from "react-router-dom";  // ✅ Import NavLink
import "./Navbar.css";
import { useNavigate } from "react-router-dom";



import logo from "../assets/MSN_Logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="MSN Academy Logo" />
      </div>

      {/* Hamburger menu */}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificate"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Certificate
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/feedback"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Feedback
          </NavLink>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="nav-buttons">
        <button className="join-btn" onClick={() => navigate("/courses")}>Join</button>
        <button className="learn-btn" onClick={() => navigate("/")}>Learn</button>
      </div>

      {/* Mobile Buttons */}
      <div className={`nav-buttons-mobile ${isMenuOpen ? "show" : ""}`}>
        <button className="join-btn" onClick={() => navigate("/courses")}>Join</button>
        <button className="learn-btn" onClick={() => navigate("/")}>Learn</button>
      </div>
    </nav>
  );
};

export default Navbar;
