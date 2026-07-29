import "./Settings.css";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import AccountSettings from "../../../components/tenant/AccountSettings/AccountSettings";
import SecuritySettings from "../../../components/tenant/SecuritySettings/SecuritySettings";
import NotificationSettings from "../../../components/tenant/NotificationSettings/NotificationSettings";
import PrivacySettings from "../../../components/tenant/PrivacySettings/PrivacySettings";
import AppearanceSettings from "../../../components/tenant/AppearanceSettings/AppearanceSettings";
import LanguageSettings from "../../../components/tenant/LanguageSettings/LanguageSettings";
import ConnectedDevices from "../../../components/tenant/ConnectedDevices/ConnectedDevices";
import DangerZone from "../../../components/tenant/DangerZone/DangerZone";

export default function Settings() {
  return (
    <DashboardLayout role="tenant">
      <div className="tenant-settings-page">

        <div className="settings-header">

          <div>
            <h1>Settings</h1>

            <p>
              Manage your account preferences, security,
              notifications and application settings.
            </p>
          </div>

        </div>

        <div className="settings-grid">

          <AccountSettings />

          <SecuritySettings />

          <NotificationSettings />

          <PrivacySettings />

          <AppearanceSettings />

          <LanguageSettings />

          <ConnectedDevices />

          <DangerZone />

        </div>

      </div>
    </DashboardLayout>
  );
}