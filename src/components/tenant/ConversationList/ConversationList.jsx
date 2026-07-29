import "./ConversationList.css";

import {
  Search,
  Circle,
} from "lucide-react";

export default function ConversationList() {
  const conversations = [
    {
      id: 1,
      name: "Michael Johnson",
      property: "Luxury 3 Bedroom Apartment",
      message: "Your maintenance request has been approved.",
      time: "10:42 AM",
      unread: 2,
      online: true,
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 2,
      name: "Sarah Williams",
      property: "Ocean View Apartment",
      message: "Your rent payment has been received.",
      time: "Yesterday",
      unread: 0,
      online: false,
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 3,
      name: "HouseHub Support",
      property: "Support Team",
      message: "Welcome to HouseHub!",
      time: "Mon",
      unread: 1,
      online: true,
      avatar: "https://i.pravatar.cc/150?img=48",
    },
  ];

  return (
    <div className="conversation-list">

      <div className="conversation-header">

        <h2>Chats</h2>

        <div className="conversation-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search conversations..."
          />

        </div>

      </div>

      <div className="conversation-items">

        {conversations.map((chat) => (

          <div
            className="conversation-item"
            key={chat.id}
          >

            <div className="avatar-wrapper">

              <img
                src={chat.avatar}
                alt={chat.name}
              />

              {chat.online && (
                <span className="online-indicator">
                  <Circle
                    size={10}
                    fill="currentColor"
                  />
                </span>
              )}

            </div>

            <div className="conversation-info">

              <div className="conversation-top">

                <h4>{chat.name}</h4>

                <span>{chat.time}</span>

              </div>

              <small>{chat.property}</small>

              <p>{chat.message}</p>

            </div>

            {chat.unread > 0 && (

              <div className="unread-badge">

                {chat.unread}

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}