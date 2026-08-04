import { useState } from "react";
import "./MessageInput.css";

import {
  SendHorizonal,
  Paperclip,
  Smile,
  Mic,
} from "lucide-react";

export default function MessageInput({ onSend, disabled = false }) {
  const [message, setMessage] = useState("");

  async function handleSend() {
    if (!message.trim() || disabled) return;

    await onSend?.(message.trim());
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
        disabled={disabled}
      >
        <SendHorizonal size={20} />
      </button>

    </div>
  );
}