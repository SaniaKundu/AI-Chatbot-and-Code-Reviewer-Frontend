import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import Loader from "./Loader";
import { sendMessage } from "../sevices/chatApi";

const welcomeMessage = {
  sender: "AI",
  text: `# 👋 Welcome

Hi! I'm your AI Assistant.

I can help you with:

- 💻 Programming
- 🤖 AI & Machine Learning
- 🌐 Web Development
- 🐞 Debugging
- 📚 Interview Questions
- 📝 Code Explanation

Ask me anything! 🚀`,
};

function ChatBox({
  onChatSaved,
  selectedHistory,
}) {
  const [messages, setMessages] = useState([
    welcomeMessage,
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Current MongoDB conversation ID
  const [conversationId, setConversationId] =
    useState(null);

  const bottomRef = useRef(null);

  // =========================
  // Load Selected Chat
  // =========================
  useEffect(() => {
    // =========================
    // NEW CHAT
    // =========================
    if (!selectedHistory) {
      setConversationId(null);
      setMessages([welcomeMessage]);
      setInput("");
      return;
    }

    // Ignore review history
    if (selectedHistory.type !== "chat") {
      return;
    }

    // =========================
    // EXISTING CHAT
    // =========================
    setConversationId(
      selectedHistory._id
    );

    if (
      selectedHistory.messages &&
      selectedHistory.messages.length > 0
    ) {
      const loadedMessages =
        selectedHistory.messages.map(
          (message) => ({
            sender:
              message.role === "user"
                ? "You"
                : "AI",

            text: message.content,
          })
        );

      setMessages(loadedMessages);
    } else {
      setMessages([welcomeMessage]);
    }

    setInput("");
  }, [selectedHistory]);

  // =========================
  // Auto Scroll
  // =========================
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // =========================
  // Send Message
  // =========================
  const handleSend = async () => {
    if (!input.trim() || loading) {
      return;
    }

    const currentInput =
      input.trim();

    // =========================
    // User Message
    // =========================
    const userMessage = {
      sender: "You",
      text: currentInput,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");
    setLoading(true);

    try {
      // =========================
      // Send Message
      // =========================
      const response =
        await sendMessage(
          currentInput,
          conversationId
        );

      console.log(
        "✅ Chat response:",
        response
      );

      // =========================
      // Save Conversation ID
      // =========================
      if (
        response.conversationId
      ) {
        setConversationId(
          response.conversationId
        );
      }

      // =========================
      // AI Response
      // =========================
      const aiResponse =
        response.response ??
        response.reply;

      const aiMessage = {
        sender: "AI",

        text:
          typeof aiResponse ===
          "string"
            ? aiResponse
            : JSON.stringify(
                aiResponse
              ),
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      // =========================
      // Refresh Sidebar
      // =========================
      if (onChatSaved) {
        onChatSaved();
      }

    } catch (error) {
      console.error(
        "❌ Chat error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text:
            "❌ Unable to connect to AI.",
        },
      ]);

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Enter Key
  // =========================
  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <div className="chat-container">

      {/* =========================
          HEADER
      ========================= */}
      <div className="chat-header">

        <div>

          <p className="page-kicker">
            AI CONVERSATION
          </p>

          <strong>
            Ask better questions.
          </strong>

          <span>
            Get useful answers without
            leaving your flow.
          </span>

        </div>

        <div className="workspace-status">

          <span className="status-dot green" />

          ONLINE

        </div>

      </div>

      {/* =========================
          CHAT BODY
      ========================= */}
      <div className="chat-body">

        {messages.map(
          (message, index) => (
            <ChatMessage
              key={`${message.sender}-${index}`}
              sender={
                message.sender
              }
              text={message.text}
            />
          )
        )}

        {loading && <Loader />}

        <div ref={bottomRef} />

      </div>

      {/* =========================
          INPUT
      ========================= */}
      <div className="chat-input">

        <textarea
          rows="2"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={
            handleKeyDown
          }
          disabled={loading}
        />

        <button
          onClick={handleSend}
          disabled={loading}
        >
          {loading
            ? "Thinking..."
            : "Send"}
        </button>

      </div>

    </div>
  );
}

export default ChatBox;