import "./MessageBubble.css";

import { Check, CheckCheck } from "lucide-react";

export default function MessageBubble({ message }) {
  const isTenant = message.sender === "tenant";

  return (
    <div
      className={`message-row ${
        isTenant ? "sent" : "received"
      }`}
    >
      <div
        className={`message-bubble ${
          isTenant ? "sent" : "received"
        }`}
      >
        <p>{message.text}</p>

        <div className="message-footer">

          <span>{message.time}</span>

          {isTenant && (

            <span className="message-status">

              {message.read ? (
                <CheckCheck size={15} />
              ) : (
                <Check size={15} />
              )}

            </span>

          )}

        </div>

      </div>
    </div>
  );
}