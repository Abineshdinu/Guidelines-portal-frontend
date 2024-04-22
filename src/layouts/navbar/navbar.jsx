import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  // Function to handle logout
  const handleLogout = () => {
    // Clear token and role from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // Update isLoggedIn state
    setIsLoggedIn(false);
  };

  // Check if user is logged in and get user role on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1>GPGE<span>.</span></h1>
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/syllabus">Syllabus</Link>
              </li>
              <li>
                <Link to="/question">Question-Paper</Link>
              </li>
              <li>
                <Link to="/materials">Materials</Link>
              </li>
              {/* Render Dashboard link only if user is logged in and is admin */}
              {isLoggedIn && userRole === "admin" && (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
              {/* Render login/logout button based on authentication state */}
              {isLoggedIn ? (
                <li>
                  <button onClick={handleLogout}  className="btn btn-outline-light">Logout</button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
          {/* .navbar */}
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
