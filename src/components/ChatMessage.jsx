import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ChatMessage({ sender, text }) {
  const isUser = sender === "You";

  const copyMessage = () => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div
      className={`message ${isUser ? "user" : "ai"}`}
    >
      <div className="message-bubble">
        <div className="message-header">
          <strong>
            {isUser ? "👤 You" : "🤖 AI"}
          </strong>

          {!isUser && (
            <button
              className="copy-btn"
              onClick={copyMessage}
            >
              Copy
            </button>
          )}
        </div>

        <div className="message-content">

        {isUser ? (
          <p>{text}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({
                inline,
                className,
                children,
                ...props
              }) {

                const match = /language-(\w+)/.exec(
                  className || ""
                );

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className={className}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {text}
          </ReactMarkdown>
        )}

        </div>
      </div>
    </div>
  );
}

export default ChatMessage;