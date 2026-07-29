import "./ChatWindow.css";

import { useEffect, useRef } from "react";

import MessageBubble from "../MessageBubble/MessageBubble";

export default function ChatWindow({
  messages = [],
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (!messages.length) {
    return (
      <div className="chat-window empty">

        <h3>No Messages Yet</h3>

        <p>
          Start the conversation by sending
          the first message.
        </p>

      </div>
    );
  }

  return (
    <div className="chat-window">

      {messages.map((message) => (

        <MessageBubble
          key={message._id}
          message={message}
        />

      ))}

      <div ref={bottomRef} />

    </div>
  );
}