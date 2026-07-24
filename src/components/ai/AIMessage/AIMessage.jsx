import "./AIMessage.css";

export default function AIMessage({ message }) {
  const isUser = message.role === "user";

  // Typing indicator
  if (message.type === "typing") {
    return (
      <div className="message assistant">
        <div className="message-avatar">🤖</div>

        <div className="typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  // Normal message
  return (
    <div className={`message ${isUser ? "user" : "assistant"}`}>
      {!isUser && (
        <div className="message-avatar">
          🤖
        </div>
      )}

      <div className="message-bubble">
        {message.text}
      </div>

      {isUser && (
        <div className="message-avatar">
          👤
        </div>
      )}
    </div>
  );
}