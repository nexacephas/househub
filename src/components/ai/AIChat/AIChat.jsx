import { useEffect, useRef, useState } from "react";
import { FiCpu, FiX } from "react-icons/fi";

import AIInput from "../AIInput/AIInput";
import AIMessage from "../AIMessage/AIMessage";
import AISuggestions from "../AISuggestions/AISuggestions";
import AITyping from "../AITyping/AITyping";
import { getAIResponse } from "../../../ai/services/chatService";
import "./AIChat.css";

export default function AIChat({ onClose }) {
  const bottomRef = useRef(null);

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
  {
    id: 1,
    role: "assistant",
    type: "text",
    text: "👋 Welcome to HouseHub AI! I'm here to help you find properties, answer questions, and guide you through HouseHub.",
    timestamp: new Date(),
  },
]);
  const handleSend = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: getAIResponse(text),
        },
      ]);
    }, 1200);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  return (
    <div className="ai-chat-window">
<div className="ai-chat-header">

    <div className="ai-header-left">

        <div className="ai-avatar">

            <FiCpu />

        </div>

        <div>

            <h3>HouseHub AI</h3>

            <p>Your Smart Real Estate Assistant</p>

            <span>

                <span className="status-dot"></span>

                Online

            </span>

        </div>

    </div>

    <button onClick={onClose}>

        <FiX />

    </button>

</div>
      <AISuggestions />

      <div className="ai-chat-body">

        {messages.map((message) => (
          <AIMessage
            key={message.id}
            message={message}
          />
        ))}

        {typing && <AITyping />}

        <div ref={bottomRef} />

      </div>

      <AIInput onSend={handleSend} />

    </div>
  );
}