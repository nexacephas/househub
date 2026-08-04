import { useState } from "react";

import FloatingActionButtons from "../../common/FloatingActionButtons/FloatingActionButtons";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import "./DashboardLayout.css";

export default function DashboardLayout({
  children,
  role,
}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="dashboard-layout">

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        role={role}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="dashboard-main">

        <Topbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main className="dashboard-content">
          <div className="dashboard-shell">{children}</div>
        </main>

        <FloatingActionButtons />

      </div>

    </div>

  );

}