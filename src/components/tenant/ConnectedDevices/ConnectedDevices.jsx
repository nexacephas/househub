import "./ConnectedDevices.css";

import {
  Laptop,
  Smartphone,
  Monitor,
  LogOut,
} from "lucide-react";

export default function ConnectedDevices() {
  const devices = [
    {
      id: 1,
      icon: <Laptop size={22} />,
      device: "Windows Laptop",
      browser: "Google Chrome",
      location: "Lagos, Nigeria",
      lastActive: "Active now",
      current: true,
    },
    {
      id: 2,
      icon: <Smartphone size={22} />,
      device: "iPhone 15",
      browser: "Safari",
      location: "Abuja, Nigeria",
      lastActive: "2 hours ago",
      current: false,
    },
    {
      id: 3,
      icon: <Monitor size={22} />,
      device: "MacBook Pro",
      browser: "Microsoft Edge",
      location: "Accra, Ghana",
      lastActive: "Yesterday",
      current: false,
    },
  ];

  function logoutDevice(id) {
    console.log("Logout Device:", id);

    // DELETE /api/v1/auth/device/:id
  }

  function logoutAllDevices() {
    console.log("Logout All Devices");

    // POST /api/v1/auth/logout-all
  }

  return (
    <section className="connected-devices">

      <div className="settings-card-header">

        <div className="settings-icon">
          <Laptop size={24} />
        </div>

        <div>

          <h2>Connected Devices</h2>

          <p>
            Manage devices currently signed into your account.
          </p>

        </div>

      </div>

      <div className="device-list">

        {devices.map((device) => (

          <div
            className="device-card"
            key={device.id}
          >

            <div className="device-info">

              <div className="device-icon">
                {device.icon}
              </div>

              <div>

                <h4>
                  {device.device}

                  {device.current && (
                    <span className="current-device">
                      Current Device
                    </span>
                  )}

                </h4>

                <p>{device.browser}</p>

                <small>
                  {device.location} • {device.lastActive}
                </small>

              </div>

            </div>

            {!device.current && (

              <button
                className="logout-device-btn"
                onClick={() => logoutDevice(device.id)}
              >

                <LogOut size={18} />

                Sign Out

              </button>

            )}

          </div>

        ))}

      </div>

      <button
        className="logout-all-btn"
        onClick={logoutAllDevices}
      >

        <LogOut size={18} />

        Sign Out From All Devices

      </button>

    </section>
  );
}