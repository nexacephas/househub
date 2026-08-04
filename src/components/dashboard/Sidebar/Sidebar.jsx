import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { sidebarMenus } from "../../../constants/sidebarMenu";

import "./Sidebar.css";

export default function Sidebar({
  role,
  isOpen,
  onClose,
}) {
  const menu = sidebarMenus[role] || [];

  function handleLinkClick() {
    if (window.innerWidth <= 992) {
      onClose?.();
    }
  }

  return (
    <aside
      className={`sidebar ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="sidebar-logo">
        <h2>HouseHub</h2>
      </div>

      <nav className="sidebar-nav">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <Icon />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <button className="logout-btn">
        <FiLogOut />
        <span>Logout</span>
      </button>
    </aside>
  );
}