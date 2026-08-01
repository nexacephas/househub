import { useState } from "react";

import GeneralSettings from "../../../components/admin/GeneralSettings/GeneralSettings";
import SecuritySettings from "../../../components/admin/SecuritySettings/SecuritySettings";
import NotificationSettings from "../../../components/admin/NotificationSettings/NotificationSettings";
import PaymentSettings from "../../../components/admin/PaymentSettings/PaymentSettings";
import IntegrationSettings from "../../../components/admin/IntegrationSettings/IntegrationSettings";

import "./Settings.css";

export default function Settings() {
  const [tab, setTab] = useState("general");

  return (
    <div className="admin-settings-page">

      <h1>System Settings</h1>

      <div className="settings-tabs">

        <button
          className={tab === "general" ? "active" : ""}
          onClick={() => setTab("general")}
        >
          General
        </button>

        <button
          className={tab === "security" ? "active" : ""}
          onClick={() => setTab("security")}
        >
          Security
        </button>

        <button
          className={tab === "notifications" ? "active" : ""}
          onClick={() => setTab("notifications")}
        >
          Notifications
        </button>

        <button
          className={tab === "payments" ? "active" : ""}
          onClick={() => setTab("payments")}
        >
          Payments
        </button>

        <button
          className={tab === "integrations" ? "active" : ""}
          onClick={() => setTab("integrations")}
        >
          Integrations
        </button>

      </div>

      <div className="settings-content">

        {tab === "general" && <GeneralSettings />}

        {tab === "security" && <SecuritySettings />}

        {tab === "notifications" && (
          <NotificationSettings />
        )}

        {tab === "payments" && (
          <PaymentSettings />
        )}

        {tab === "integrations" && (
          <IntegrationSettings />
        )}

      </div>

    </div>
  );
}