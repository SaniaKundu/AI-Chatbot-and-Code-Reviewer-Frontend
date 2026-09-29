import { useState } from "react";

import ChatBox from "../components/ChatBox";
import HistorySidebar from "../components/HistorySidebar";

function ChatBot() {
  // =========================
  // Refresh History
  // =========================
  const [refreshHistory, setRefreshHistory] =
    useState(0);

  // =========================
  // Selected Conversation
  // =========================
  const [selectedHistory, setSelectedHistory] =
    useState(null);

  // =========================
  // Select Chat History
  // =========================
  const handleSelectHistory = (item) => {
    if (item.type !== "chat") {
      return;
    }

    console.log(
      "Selected chat history:",
      item
    );

    setSelectedHistory(item);
  };

  // =========================
  // New Chat
  // =========================
  const handleNewChat = () => {
    setSelectedHistory(null);
  };

  return (
    <div className="chat-page">

      {/* =========================
          CHAT HISTORY SIDEBAR
      ========================= */}
      <HistorySidebar
        filterType="chat"
        selectedHistoryId={
          selectedHistory?._id
        }
        onSelectHistory={
          handleSelectHistory
        }
        refreshHistory={
          refreshHistory
        }
        onNewItem={
          handleNewChat
        }
      />

      {/* =========================
          CHAT AREA
      ========================= */}
      <main className="chat-content">

        <ChatBox
          selectedHistory={
            selectedHistory
          }
          onChatSaved={() => {
            setRefreshHistory(
              (prev) => prev + 1
            );
          }}
        />

      </main>

    </div>
  );
}

export default ChatBot;