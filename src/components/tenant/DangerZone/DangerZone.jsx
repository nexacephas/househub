import "./DangerZone.css";

import {
  AlertTriangle,
  LogOut,
  Trash2,
} from "lucide-react";

export default function DangerZone() {
  function handleLogout() {
    console.log("Logout");

    // POST /api/v1/auth/logout
  }

  function handleDeleteAccount() {
    const confirmed = window.confirm(
      "This action is permanent. Are you sure you want to delete your account?"
    );

    if (!confirmed) return;

    console.log("Delete Account");

    // DELETE /api/v1/tenant/account
  }

  return (
    <section className="danger-zone">

      <div className="settings-card-header">

        <div className="settings-icon danger-icon">

          <AlertTriangle size={24} />

        </div>

        <div>

          <h2>Danger Zone</h2>

          <p>
            These actions are sensitive and may permanently
            affect your account.
          </p>

        </div>

      </div>

      <div className="danger-card">

        <div className="danger-content">

          <h3>Sign Out</h3>

          <p>
            Sign out of your current HouseHub session.
          </p>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

      <div className="danger-card delete-card">

        <div className="danger-content">

          <h3>Delete Account</h3>

          <p>
            Permanently delete your account, profile,
            payments, maintenance history and all associated
            data. This action cannot be undone.
          </p>

        </div>

        <button
          className="delete-btn"
          onClick={handleDeleteAccount}
        >

          <Trash2 size={18} />

          Delete Account

        </button>

      </div>

    </section>
  );
}