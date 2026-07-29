import { useState } from "react";
import "./NotificationSettings.css";

import { Bell } from "lucide-react";

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    rentReminder: true,
    maintenance: true,
    messages: true,
    promotions: false,
  });

  function handleToggle(e) {
    const { name, checked } = e.target;

    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(notifications);

    // PUT /api/v1/tenant/notifications
  }

  const options = [
    {
      name: "email",
      title: "Email Notifications",
      description: "Receive updates via email.",
    },
    {
      name: "sms",
      title: "SMS Notifications",
      description: "Receive important alerts by SMS.",
    },
    {
      name: "push",
      title: "Push Notifications",
      description: "Allow browser/mobile push notifications.",
    },
    {
      name: "rentReminder",
      title: "Rent Reminders",
      description: "Receive reminders before rent is due.",
    },
    {
      name: "maintenance",
      title: "Maintenance Updates",
      description: "Be notified about maintenance requests.",
    },
    {
      name: "messages",
      title: "New Messages",
      description: "Receive alerts for landlord messages.",
    },
    {
      name: "promotions",
      title: "Promotions",
      description: "Receive special offers and promotions.",
    },
  ];

  return (
    <section className="notification-settings">

      <div className="settings-card-header">

        <div className="settings-icon">
          <Bell size={24} />
        </div>

        <div>
          <h2>Notifications</h2>
          <p>Choose how HouseHub keeps you informed.</p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        {options.map((option) => (

          <div
            className="notification-item"
            key={option.name}
          >

            <div>

              <h4>{option.title}</h4>

              <p>{option.description}</p>

            </div>

            <label className="switch">

              <input
                type="checkbox"
                name={option.name}
                checked={notifications[option.name]}
                onChange={handleToggle}
              />

              <span className="slider"></span>

            </label>

          </div>

        ))}

        <button
          className="save-btn"
          type="submit"
        >
          Save Preferences
        </button>

      </form>

    </section>
  );
}