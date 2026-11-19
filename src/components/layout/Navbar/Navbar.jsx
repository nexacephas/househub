import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { ChevronDown, LayoutDashboard, Settings, LogOut, UserCircle, Moon, Sun } from "lucide-react";
import logo from "../../../assets/logos/new logo.png";
import { navLinks } from "../../../constants/navigation";
import { useAuth } from "../../../context/AuthContext";

import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("househub-theme", nextTheme);
    setTheme(nextTheme);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLogout = async () => {
    await logout();
    setProfileOpen(false);
    setMenuOpen(false);
    navigate("/");
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlaysHero = pathname === "/";

  return (
    <header
      className={[
        "navbar",
        overlaysHero ? "navbar-over-hero" : "",
        scrolled ? "scrolled" : "",
      ].filter(Boolean).join(" ")}
    >
      <div className="container navbar-container">

        {/* Logo */}

                <Link to="/" className="logo">
            <img src={logo} alt="HouseHub — Trusted homes, stronger communities" />
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
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {user ? (
            <div className="profile-dropdown-wrapper">
              <button className="profile-dropdown-trigger" onClick={() => setProfileOpen((prev) => !prev)}>
                {user.avatar ? (
                  <img src={user.avatar} alt="avatar" />
                ) : (
                  <div className="avatar-fallback">{`${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase() || "U"}</div>
                )}
                <span>{`${user.firstName || ""} ${user.lastName || ""}`.trim() || "Profile"}</span>
                <ChevronDown size={16} />
              </button>

              {profileOpen && (
                <div className="profile-dropdown-menu">
                  <Link to={`/${user.role}/dashboard`} onClick={() => setProfileOpen(false)}>
                    <LayoutDashboard size={16} /> Dashboard
                  </Link>
                  <Link to={`/${user.role}/settings`} onClick={() => setProfileOpen(false)}>
                    <Settings size={16} /> Settings
                  </Link>
                  <Link to={user.role === "agent" ? "/agent/profile" : `/${user.role}/settings`} onClick={() => setProfileOpen(false)}>
                    <UserCircle size={16} /> My Profile
                  </Link>
                  <button onClick={handleLogout}>
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link className="login-btn-1" to="/login">
                Login
              </Link>

              <Link className="register-btn" to="/register">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}

        <button
          className={`menu-btn${menuOpen ? " is-open" : ""}`}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="menu-btn-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

      </div>

      {/* Mobile Menu */}

<nav
  id="mobile-navigation"
  className={menuOpen ? "mobile-menu active" : "mobile-menu"}
  aria-label="Mobile navigation"
  aria-hidden={!menuOpen}
  inert={!menuOpen}
>
  <button
    className="mobile-theme-toggle"
    type="button"
    onClick={toggleTheme}
  >
    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    <span>{theme === "dark" ? "Light theme" : "Dark theme"}</span>
  </button>

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

  {user ? (
    <>
      <Link to={`/${user.role}/dashboard`} onClick={() => setMenuOpen(false)}>
        Dashboard
      </Link>
      <Link to={`/${user.role}/settings`} onClick={() => setMenuOpen(false)}>
        Settings
      </Link>
      <Link to={user.role === "agent" ? "/agent/profile" : `/${user.role}/settings`} onClick={() => setMenuOpen(false)}>
        Profile
      </Link>
      <button className="mobile-logout" onClick={handleLogout}>
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login" onClick={() => setMenuOpen(false)}>
        Login
      </Link>

      <Link className="mobile-register" to="/register" onClick={() => setMenuOpen(false)}>
        Register
      </Link>
    </>
  )}

</nav>
    </header>
  );
}