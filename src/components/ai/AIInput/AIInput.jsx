import { useState } from "react";
import { FiSend } from "react-icons/fi";

import "./AIInput.css";

export default function AIInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="ai-input">

      <input
        type="text"
        placeholder="Ask HouseHub AI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button onClick={handleSend}>
        <FiSend />
      </button>

    </div>
  );
}