import "./ChatWindow.css";

import PropertyChatHeader from "../PropertyChatHeader/PropertyChatHeader";
import MessageBubble from "../MessageBubble/MessageBubble";
import MessageInput from "../MessageInput/MessageInput";

export default function ChatWindow() {
const messages = [
  {
    id: 1,
    sender: "landlord",
    text: "Hello Cephas, I wanted to let you know your maintenance request has been assigned to a plumber.",
    time: "10:10 AM",
  },
  {
    id: 2,
    sender: "tenant",
    text: "Thank you. When should I expect the technician?",
    time: "10:12 AM",
    read: true,
  },
  {
    id: 3,
    sender: "landlord",
    text: "He'll arrive tomorrow between 10:00 AM and 12:00 PM.",
    time: "10:15 AM",
  },
];

  return (
    <div className="chat-window">

      <PropertyChatHeader />

      <div className="chat-messages">

        {messages.map((message) => (

          <MessageBubble
            key={message.id}
            message={message}
          />

        ))}

      </div>

      <MessageInput />

    </div>
  );
}