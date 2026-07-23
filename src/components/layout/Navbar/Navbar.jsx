import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"

import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../../assets/logos/logo.jpeg";
import { navLinks } from "../../../constants/navigation";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const [openDropdown, setOpenDropdown] = useState(null);

const toggleDropdown = (name) => {
  setOpenDropdown(openDropdown === name ? null : name);
};
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-container">

        {/* Logo */}

                <Link to="/" className="logo">
            <img src={logo} alt="HouseHub Logo" />
            <span>HouseHub</span>
            </Link>
        {/* Desktop Navigation */}

<nav className="nav-links">
  {navLinks.map((item) => (
    <div className="nav-item" key={item.name}>
      {item.children ? (
        <>
          <button className="dropdown-btn">
            {item.name}
            <ChevronDown size={16} />
          </button>

          <div className="dropdown-menu">
            {item.children.map((child) => (
              <NavLink key={child.name} to={child.path}>
                {child.name}
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <NavLink to={item.path}>{item.name}</NavLink>
      )}
    </div>
  ))}
</nav>

        {/* Buttons */}

        <div className="nav-buttons">

          <Link className="login-btn-1" to="/login">
            Login
          </Link>

          <Link className="register-btn" to="/register">
            Register
          </Link>

        </div>

        {/* Mobile Toggle */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

<div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

  {navLinks.map((item) => (

    <div key={item.name} className="mobile-nav-item">

      {item.children ? (
        <>
          <button
            className="mobile-dropdown-btn"
            onClick={() => toggleDropdown(item.name)}
          >
            <span>{item.name}</span>

            <ChevronDown
              size={18}
              className={
                openDropdown === item.name
                  ? "rotate"
                  : ""
              }
            />
          </button>

          <div
            className={
              openDropdown === item.name
                ? "mobile-dropdown open"
                : "mobile-dropdown"
            }
          >
            {item.children.map((child) => (
              <NavLink
                key={child.name}
                to={child.path}
                onClick={() => {
                  setMenuOpen(false);
                  setOpenDropdown(null);
                }}
              >
                {child.name}
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <NavLink
          to={item.path}
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </NavLink>
      )}

    </div>

  ))}

  <Link
    to="/login"
    onClick={() => setMenuOpen(false)}
  >
    Login
  </Link>

  <Link
    className="mobile-register"
    to="/register"
    onClick={() => setMenuOpen(false)}
  >
    Register
  </Link>

</div>
    </header>
  );
}