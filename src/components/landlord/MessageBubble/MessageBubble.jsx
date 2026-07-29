import "./MessageBubble.css";

import {
  Check,
  CheckCheck,
  FileText,
} from "lucide-react";

export default function MessageBubble({
  message,
}) {
  const isMine = message.isMine;

  return (
    <div
      className={`message-row ${
        isMine ? "mine" : "theirs"
      }`}
    >
      {!isMine && (
        <img
          className="message-avatar"
          src={
            message.sender?.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              message.sender?.fullName || "User"
            )}`
          }
          alt={message.sender?.fullName}
        />
      )}

      <div
        className={`message-bubble ${
          isMine ? "mine" : "theirs"
        }`}
      >
        {/* Text */}

        {message.text && (
          <p className="message-text">
            {message.text}
          </p>
        )}

        {/* Images */}

        {message.images?.length > 0 && (
          <div className="message-images">
            {message.images.map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="attachment"
                />
              )
            )}
          </div>
        )}

        {/* Files */}

        {message.files?.length > 0 && (
          <div className="message-files">
            {message.files.map(
              (file, index) => (
                <a
                  key={index}
                  href={file.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={18} />

                  {file.name}
                </a>
              )
            )}
          </div>
        )}

        <div className="message-footer">

          <span>
            {message.createdAt
              ? new Date(
                  message.createdAt
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""}
          </span>

          {isMine && (
            <span className="read-status">
              {message.read ? (
                <CheckCheck size={16} />
              ) : (
                <Check size={16} />
              )}
            </span>
          )}

        </div>

      </div>

    </div>
  );
}