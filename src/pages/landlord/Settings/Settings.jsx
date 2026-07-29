import "./Settings.css";

import { useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import ProfileSettings from "../../../components/landlord/ProfileSettings/ProfileSettings";
import BusinessSettings from "../../../components/landlord/BusinessSettings/BusinessSettings";
import BankSettings from "../../../components/landlord/BankSettings/BankSettings";
import NotificationSettings from "../../../components/landlord/NotificationSettings/NotificationSettings";
import AppearanceSettings from "../../../components/landlord/AppearanceSettings/AppearanceSettings";
import SecuritySettings from "../../../components/landlord/SecuritySettings/SecuritySettings";
import DocumentSettings from "../../../components/landlord/DocumentSettings/DocumentSettings";
import SessionList from "../../../components/landlord/SessionList/SessionList";

const tabs = [
  "Profile",
  "Business",
  "Bank",
  "Notifications",
  "Appearance",
  "Security",
  "Documents",
  "Sessions",
];

export default function Settings() {
  const [activeTab, setActiveTab] =
    useState("Profile");

  function renderContent() {
    switch (activeTab) {
      case "Profile":
        return <ProfileSettings />;

      case "Business":
        return <BusinessSettings />;

      case "Bank":
        return <BankSettings />;

      case "Notifications":
        return <NotificationSettings />;

      case "Appearance":
        return <AppearanceSettings />;

      case "Security":
        return <SecuritySettings />;

      case "Documents":
        return <DocumentSettings />;

      case "Sessions":
        return <SessionList />;

      default:
        return <ProfileSettings />;
    }
  }

  return (
    <DashboardLayout role="landlord">

      <div className="settings-page">

        <div className="settings-header">

          <h1>Settings</h1>

          <p>
            Manage your account, business,
            security and preferences.
          </p>

        </div>

        <div className="settings-container">

          <aside className="settings-sidebar">

            {tabs.map((tab) => (

              <button
                key={tab}
                className={
                  activeTab === tab
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab(tab)
                }
              >
                {tab}
              </button>

            ))}

          </aside>

          <section className="settings-content">

            {renderContent()}

          </section>

        </div>

      </div>

    </DashboardLayout>
  );
}