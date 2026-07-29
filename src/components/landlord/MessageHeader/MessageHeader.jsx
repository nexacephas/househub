import "./MessageHeader.css";

import {
  Phone,
  Video,
  MoreVertical,
  MapPin,
} from "lucide-react";

export default function MessageHeader({
  conversation,
}) {
  const participant =
    conversation?.participant || {};

  return (
    <div className="message-header">

      <div className="message-user">

        <div className="message-avatar-wrapper">

          <img
            src={
              participant.avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                participant.fullName || "User"
              )}`
            }
            alt={participant.fullName}
          />

          {participant.online && (
            <span className="online-indicator" />
          )}

        </div>

        <div className="message-user-info">

          <h3>
            {participant.fullName}
          </h3>

          <span className="user-status">
            {participant.online
              ? "Online"
              : "Offline"}
          </span>

          {conversation.property && (
            <p className="property-info">

              <MapPin size={15} />

              {conversation.property.title}

            </p>
          )}

        </div>

      </div>

      <div className="message-actions">

        <button
          title="Call"
          className="action-btn"
        >
          <Phone size={20} />
        </button>

        <button
          title="Video Call"
          className="action-btn"
        >
          <Video size={20} />
        </button>

        <button
          title="More"
          className="action-btn"
        >
          <MoreVertical size={20} />
        </button>

      </div>

    </div>
  );
}