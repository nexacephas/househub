import { useMemo } from "react";
import "./MessageBubble.css";

import { Check, CheckCheck } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

export default function MessageBubble({ message }) {
  const { user } = useAuth();
  const isTenant = useMemo(() => {
    const senderId = message.sender?._id || message.sender;
    return senderId === user?._id;
  }, [message.sender, user?._id]);

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