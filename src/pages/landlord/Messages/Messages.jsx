import "./Messages.css";

import { useEffect, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import ConversationList from "../../../components/landlord/ConversationList/ConversationList";
import ChatWindow from "../../../components/landlord/ChatWindow/ChatWindow";
import MessageHeader from "../../../components/landlord/MessageHeader/MessageHeader";
import MessageInput from "../../../components/landlord/MessageInput/MessageInput";

import messageService from "../../../services/message.service";

export default function Messages() {
  const [loading, setLoading] = useState(true);

  const [conversations, setConversations] = useState([]);

  const [selectedConversation, setSelectedConversation] =
    useState(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadConversations();
  }, []);

  async function loadConversations() {
    try {
      setLoading(true);

      const { data } =
        await messageService.getConversations();

      setConversations(data.conversations || []);

      if (data.conversations?.length) {
        openConversation(data.conversations[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function openConversation(conversation) {
    setSelectedConversation(conversation);

    try {
      const { data } =
        await messageService.getMessages(
          conversation._id
        );

      setMessages(data.messages || []);
    } catch (error) {
      console.error(error);
    }
  }

  async function sendMessage(text) {
    if (!selectedConversation) return;

    try {
      const { data } =
        await messageService.sendMessage({
          conversationId:
            selectedConversation._id,
          text,
        });

      setMessages((prev) => [
        ...prev,
        data.message,
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DashboardLayout role="landlord">

      <div className="messages-page">

        <ConversationList
          loading={loading}
          conversations={conversations}
          selectedConversation={
            selectedConversation
          }
          onSelect={openConversation}
        />

        <div className="chat-panel">

          {selectedConversation ? (
            <>

              <MessageHeader
                conversation={
                  selectedConversation
                }
              />

              <ChatWindow
                messages={messages}
              />

              <MessageInput
                onSend={sendMessage}
              />

            </>
          ) : (
            <div className="empty-chat">

              <h2>
                Select a conversation
              </h2>

              <p>
                Choose a tenant, agent or
                technician to start messaging.
              </p>

            </div>
          )}

        </div>

      </div>

    </DashboardLayout>
  );
}