import { useEffect, useState } from "react";
import axios from "axios";

const HistorySidebar = ({
  onSelectHistory,
  refreshHistory,
  filterType,
  selectedHistoryId,
  onNewItem,
}) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  // =========================
  // Fetch History
  // =========================
  useEffect(() => {
    let isMounted = true;

    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          if (isMounted) {
            setHistory([]);
            setLoading(false);
          }

          return;
        }

        if (!API_URL) {
          console.error(
            "❌ VITE_API_URL is not defined"
          );

          if (isMounted) {
            setHistory([]);
            setLoading(false);
          }

          return;
        }

        setLoading(true);

        const response = await axios.get(
          `${API_URL}/api/history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const allHistory =
          Array.isArray(
            response.data.history
          )
            ? response.data.history
            : [];

        // =========================
        // Filter History Type
        // =========================
        const filteredHistory = filterType
          ? allHistory.filter(
              (item) =>
                item.type === filterType
            )
          : allHistory;

        if (isMounted) {
          setHistory(filteredHistory);
        }
      } catch (error) {
        console.error(
          "❌ History fetch error:",
          error
        );

        if (isMounted) {
          setHistory([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchHistory();

    return () => {
      isMounted = false;
    };
  }, [API_URL, refreshHistory, filterType]);

  // =========================
  // Delete History
  // =========================
  const deleteHistory = async (
    id,
    event
  ) => {
    event.stopPropagation();

    try {
      const token =
        localStorage.getItem("token");

      if (!token) {
        return;
      }

      await axios.delete(
        `${API_URL}/api/history/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setHistory((prev) =>
        prev.filter(
          (item) => item._id !== id
        )
      );

      // If deleted item was selected
      if (
        selectedHistoryId === id &&
        onNewItem
      ) {
        onNewItem();
      }
    } catch (error) {
      console.error(
        "❌ Delete history error:",
        error
      );
    }
  };

  // =========================
  // Select History
  // =========================
  const handleSelect = (item) => {
    if (onSelectHistory) {
      onSelectHistory(item);
    }
  };

  // =========================
  // New Chat / New Review
  // =========================
  const handleNewItem = () => {
    if (onNewItem) {
      onNewItem();
    }
  };

  // =========================
  // Format Date
  // =========================
  const formatDate = (date) => {
    if (!date) {
      return "";
    }

    const currentDate =
      new Date();

    const itemDate =
      new Date(date);

    const isToday =
      currentDate.toDateString() ===
      itemDate.toDateString();

    if (isToday) {
      return itemDate.toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );
    }

    return itemDate.toLocaleDateString(
      [],
      {
        day: "numeric",
        month: "short",
      }
    );
  };

  // =========================
  // Title
  // =========================
  const sidebarTitle =
    filterType === "review"
      ? "Review History"
      : "Chat History";

  const sidebarSubtitle =
    filterType === "review"
      ? "Your previous code reviews"
      : "Your previous conversations";

  const newButtonText =
    filterType === "review"
      ? "New Review"
      : "New Chat";

  // =========================
  // Render
  // =========================
  return (
    <aside className="history-sidebar">

      {/* =========================
          SIDEBAR HEADER
      ========================= */}
      <div className="history-header">

        <div className="history-heading">

          <div className="history-heading-icon">
            {filterType === "review"
              ? "⌘"
              : "✦"}
          </div>

          <div>
            <h3>
              {sidebarTitle}
            </h3>

            <p>
              {sidebarSubtitle}
            </p>
          </div>

        </div>

      </div>

      {/* =========================
          NEW BUTTON
      ========================= */}
      <div className="history-new-wrapper">

        <button
          type="button"
          className="new-history-btn"
          onClick={handleNewItem}
        >
          <span className="new-history-icon">
            +
          </span>

          <span>
            {newButtonText}
          </span>
        </button>

      </div>

      {/* =========================
          HISTORY CONTENT
      ========================= */}
      <div className="history-content">

        {loading ? (
          <div className="history-state">

            <div className="history-spinner"></div>

            <span>
              Loading history...
            </span>

          </div>
        ) : history.length === 0 ? (
          <div className="history-state empty">

            <div className="empty-history-icon">
              {filterType === "review"
                ? "⌘"
                : "✦"}
            </div>

            <strong>
              {filterType === "review"
                ? "No reviews yet"
                : "No conversations yet"}
            </strong>

            <span>
              {filterType === "review"
                ? "Your code reviews will appear here."
                : "Your conversations will appear here."}
            </span>

          </div>
        ) : (
          <div className="history-list">

            {/* =========================
                HISTORY ITEMS
            ========================= */}
            {history.map((item) => {

              const isSelected =
                selectedHistoryId ===
                item._id;

              return (
                <div
                  key={item._id}
                  className={`history-item ${
                    isSelected
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(item)
                  }
                >

                  {/* ICON */}
                  <div className="history-item-icon">

                    {filterType ===
                    "review"
                      ? "⌘"
                      : "✦"}

                  </div>

                  {/* INFORMATION */}
                  <div className="history-info">

                    <div className="history-title">
                      {item.title ||
                        (filterType ===
                        "review"
                          ? "Code Review"
                          : "New Chat")}
                    </div>

                    <div className="history-meta">

                      <span>
                        {formatDate(
                          item.updatedAt ||
                            item.createdAt
                        )}
                      </span>

                    </div>

                  </div>

                  {/* DELETE */}
                  <button
                    type="button"
                    className="delete-history"
                    title="Delete"
                    onClick={(event) =>
                      deleteHistory(
                        item._id,
                        event
                      )
                    }
                  >
                    ×
                  </button>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </aside>
  );
};

export default HistorySidebar;