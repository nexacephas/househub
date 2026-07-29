import { useState } from "react";
import "./MessageInput.css";

import {
  SendHorizonal,
  Paperclip,
  Smile,
  Mic,
} from "lucide-react";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    console.log(message);

    setMessage("");
  }

  return (
    <div className="message-input">

      <button
        className="input-icon"
        title="Attach File"
      >
        <Paperclip size={20} />
      </button>

      <button
        className="input-icon"
        title="Emoji"
      >
        <Smile size={20} />
      </button>

      <textarea
        rows="1"
        placeholder="Type a message..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button
        className="input-icon"
        title="Voice Message"
      >
        <Mic size={20} />
      </button>

      <button
        className="send-btn"
        onClick={handleSend}
      >
        <SendHorizonal size={20} />
      </button>

    </div>
  );
}