import { useState } from "react";
import "./PrivacySettings.css";

import {
  ShieldCheck,
  Download,
} from "lucide-react";

export default function PrivacySettings() {
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    locationSharing: false,
    analytics: true,
    partnerSharing: false,
  });

  function handleToggle(e) {
    const { name, checked } = e.target;

    setPrivacy((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(privacy);

    // PUT /api/v1/tenant/privacy
  }

  function downloadData() {
    console.log("Download personal data");

    // GET /api/v1/tenant/export
  }

  const settings = [
    {
      name: "profileVisible",
      title: "Profile Visibility",
      description:
        "Allow your landlord to view your tenant profile information.",
    },
    {
      name: "locationSharing",
      title: "Location Sharing",
      description:
        "Allow HouseHub to use your location for nearby services.",
    },
    {
      name: "analytics",
      title: "Usage Analytics",
      description:
        "Help improve HouseHub by sharing anonymous usage data.",
    },
    {
      name: "partnerSharing",
      title: "Partner Data Sharing",
      description:
        "Allow trusted partners to provide additional services.",
    },
  ];

  return (
    <section className="privacy-settings">

      <div className="settings-card-header">

        <div className="settings-icon">
          <ShieldCheck size={24} />
        </div>

        <div>

          <h2>Privacy</h2>

          <p>
            Manage how your information is used and shared.
          </p>

        </div>

      </div>

      <form onSubmit={handleSubmit}>

        {settings.map((item) => (

          <div
            className="privacy-item"
            key={item.name}
          >

            <div>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>

            <label className="switch">

              <input
                type="checkbox"
                name={item.name}
                checked={privacy[item.name]}
                onChange={handleToggle}
              />

              <span className="slider"></span>

            </label>

          </div>

        ))}

        <div className="download-data">

          <div>

            <h4>Download My Data</h4>

            <p>
              Export your account information and activity.
            </p>

          </div>

          <button
            type="button"
            className="download-data-btn"
            onClick={downloadData}
          >

            <Download size={18} />

            Export Data

          </button>

        </div>

        <button
          className="save-btn"
          type="submit"
        >
          Save Privacy Settings
        </button>

      </form>

    </section>
  );
}