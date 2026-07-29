import "./PropertyChatHeader.css";

import {
  Phone,
  Video,
  MoreVertical,
  Circle,
} from "lucide-react";

export default function PropertyChatHeader() {
  const landlord = {
    name: "Michael Johnson",
    property: "Luxury 3 Bedroom Apartment",
    online: true,
    avatar: "https://i.pravatar.cc/150?img=15",
  };

  return (
    <header className="property-chat-header">

      <div className="chat-user">

        <div className="chat-avatar">

          <img
            src={landlord.avatar}
            alt={landlord.name}
          />

          {landlord.online && (
            <span className="online-dot">
              <Circle
                size={10}
                fill="currentColor"
              />
            </span>
          )}

        </div>

        <div>

          <h3>{landlord.name}</h3>

          <small>{landlord.property}</small>

          <p>
            {landlord.online
              ? "Online"
              : "Offline"}
          </p>

        </div>

      </div>

      <div className="chat-actions">

        <button title="Voice Call">
          <Phone size={20} />
        </button>

        <button title="Video Call">
          <Video size={20} />
        </button>

        <button title="More">
          <MoreVertical size={20} />
        </button>

      </div>

    </header>
  );
}