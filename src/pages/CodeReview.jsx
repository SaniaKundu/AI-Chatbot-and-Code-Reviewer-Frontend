import { useState } from "react";

import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";
import HistorySidebar from "../components/HistorySidebar";

import { reviewCodeAPI } from "../sevices/api";

function CodeReview() {

  // =========================
  // Code
  // =========================
  const [code, setCode] = useState("");

  // =========================
  // Review
  // =========================
  const [review, setReview] = useState("");

  // =========================
  // Refresh History
  // =========================
  const [refreshHistory, setRefreshHistory] =
    useState(0);

  // =========================
  // Selected Review
  // =========================
  const [selectedHistory, setSelectedHistory] =
    useState(null);

  // =========================
  // Review Code
  // =========================
  const reviewCode = async () => {

    if (!code.trim()) {
      alert(
        "Please write or paste code."
      );

      return;
    }

    try {

      const result =
        await reviewCodeAPI(code);

      setReview(result.review);

      // Refresh sidebar
      setRefreshHistory(
        (prev) => prev + 1
      );

    } catch (error) {

      console.error(
        "❌ Code Review Error:",
        error
      );

      alert(
        "Something went wrong"
      );
    }
  };

  // =========================
  // Clear Review
  // =========================
  const clearCode = () => {

    setCode("");

    setReview("");

    setSelectedHistory(null);
  };

  // =========================
  // Copy Code
  // =========================
  const copyCode = async () => {

    if (!code) {
      alert(
        "There is no code to copy."
      );

      return;
    }

    try {

      await navigator.clipboard.writeText(
        code
      );

      alert(
        "Code copied successfully"
      );

    } catch (error) {

      console.error(
        "❌ Copy Error:",
        error
      );

    }
  };

  // =========================
  // Select Review History
  // =========================
  const handleSelectHistory = (item) => {

    if (item.type !== "review") {
      return;
    }

    console.log(
      "Selected review history:",
      item
    );

    setSelectedHistory(item);

    // Restore Code
    setCode(item.code || "");

    // Restore Review
    if (
      typeof item.review ===
      "string"
    ) {

      setReview(item.review);

    } else if (item.review) {

      setReview(
        JSON.stringify(
          item.review,
          null,
          2
        )
      );

    } else {

      setReview("");

    }
  };

  // =========================
  // New Review
  // =========================
  const handleNewReview = () => {

    setCode("");

    setReview("");

    setSelectedHistory(null);
  };

  return (

    <div className="code-review-page">

      {/* =========================
          REVIEW HISTORY
      ========================= */}
      <HistorySidebar

        filterType="review"

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
          handleNewReview
        }

      />

      {/* =========================
          MAIN REVIEW AREA
      ========================= */}
      <main className="code-review-content">

        <div className="review">

          {/* =========================
              HEADER
          ========================= */}
          <div className="workspace-heading">

            <div>

              <p className="page-kicker">
                AI CODE REVIEW
              </p>

              <h1>
                Make every line earn
                its place.
              </h1>

              <p>
                Paste your code, get a
                focused review, and move
                forward with confidence.
              </p>

            </div>

            <span className="workspace-status">

              <span className="status-dot" />

              READY TO REVIEW

            </span>

          </div>

          {/* =========================
              EDITOR + REVIEW
          ========================= */}
          <div className="editor-section">

            {/* CODE EDITOR */}
            <div className="editor-box">

              <div className="panel-heading">

                <div>

                  <span className="panel-kicker">
                    SOURCE
                  </span>

                  <h2>
                    Code Editor
                  </h2>

                </div>

                <span className="panel-badge">
                  JS / TS
                </span>

              </div>

              <CodeEditor
                code={code}
                setCode={setCode}
              />

            </div>

            {/* REVIEW RESULT */}
            <div className="review-box">

              <div className="panel-heading">

                <div>

                  <span className="panel-kicker">
                    ANALYSIS
                  </span>

                  <h2>
                    Review Result
                  </h2>

                </div>

                <span className="panel-badge">
                  AI INSIGHTS
                </span>

              </div>

              <ReviewPanel
                review={review}
              />

            </div>

          </div>

          {/* =========================
              ACTION BUTTONS
          ========================= */}
          <div className="button-group">

            <button
              className="primary-action"
              onClick={reviewCode}
            >
              Review Code
            </button>

            <button
              className="secondary-action"
              onClick={clearCode}
            >
              Clear
            </button>

            <button
              className="secondary-action"
              onClick={copyCode}
            >
              Copy
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default CodeReview;