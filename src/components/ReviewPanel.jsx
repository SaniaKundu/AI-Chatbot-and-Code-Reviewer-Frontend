import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  Prism as SyntaxHighlighter,
} from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ReviewPanel({ review }) {

  // =====================================================
  // EMPTY STATE
  // =====================================================

  if (!review || !String(review).trim()) {
    return (
      <div className="review-panel">

        <div className="review-empty">

          <div className="review-empty-icon">
            ✦
          </div>

          <h3>
            Your code review will appear here.
          </h3>

          <p>
            Submit your code to receive
            AI-powered analysis and
            improvement suggestions.
          </p>

        </div>

      </div>
    );
  }


  // =====================================================
  // CONVERT REVIEW TO STRING
  // =====================================================

  const reviewText =
    typeof review === "string"
      ? review
      : JSON.stringify(review, null, 2);


  return (
    <div className="review-panel">

      {/* =================================================
          REVIEW HEADER
      ================================================= */}

      <div className="review-result-header">

        <div className="review-result-title">

          <div className="review-ai-icon">
            ✦
          </div>

          <div>

            <span className="review-label">
              AI ANALYSIS
            </span>

            <h3>
              Code Review
            </h3>

          </div>

        </div>


        <div className="review-status">

          <span className="review-status-dot" />

          COMPLETE

        </div>

      </div>


      {/* =================================================
          MARKDOWN REVIEW CONTENT
      ================================================= */}

      <div className="review-markdown">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}

          components={{

            /* =================================================
               H1
            ================================================= */

            h1: ({ children }) => (
              <h1 className="review-md-h1">
                {children}
              </h1>
            ),


            /* =================================================
               H2
            ================================================= */

            h2: ({ children }) => (
              <h2 className="review-md-h2">
                {children}
              </h2>
            ),


            /* =================================================
               H3
            ================================================= */

            h3: ({ children }) => (
              <h3 className="review-md-h3">
                {children}
              </h3>
            ),


            /* =================================================
               PARAGRAPH
            ================================================= */

            p: ({ children }) => (
              <p className="review-md-p">
                {children}
              </p>
            ),


            /* =================================================
               BOLD
            ================================================= */

            strong: ({ children }) => (
              <strong className="review-md-strong">
                {children}
              </strong>
            ),


            /* =================================================
               UNORDERED LIST
            ================================================= */

            ul: ({ children }) => (
              <ul className="review-md-ul">
                {children}
              </ul>
            ),


            /* =================================================
               ORDERED LIST
            ================================================= */

            ol: ({ children }) => (
              <ol className="review-md-ol">
                {children}
              </ol>
            ),


            /* =================================================
               LIST ITEM
            ================================================= */

            li: ({ children }) => (
              <li className="review-md-li">
                {children}
              </li>
            ),


            /* =================================================
               CODE
            ================================================= */

            code({
              inline,
              className,
              children,
              ...props
            }) {

              const match =
                /language-(\w+)/.exec(
                  className || ""
                );


              /* -----------------------------------------------
                 CODE BLOCK WITH LANGUAGE
              ------------------------------------------------ */

              if (!inline && match) {

                return (
                  <div className="review-code-wrapper">

                    <div className="review-code-header">

                      <span>
                        {match[1].toUpperCase()}
                      </span>

                    </div>

                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="review-code-block"
                      {...props}
                    >
                      {String(children).replace(
                        /\n$/,
                        ""
                      )}
                    </SyntaxHighlighter>

                  </div>
                );
              }


              /* -----------------------------------------------
                 CODE BLOCK WITHOUT LANGUAGE
              ------------------------------------------------ */

              if (!inline) {

                return (
                  <div className="review-code-wrapper">

                    <div className="review-code-header">

                      <span>
                        CODE
                      </span>

                    </div>

                    <SyntaxHighlighter
                      style={oneDark}
                      language="text"
                      PreTag="div"
                      className="review-code-block"
                      {...props}
                    >
                      {String(children).replace(
                        /\n$/,
                        ""
                      )}
                    </SyntaxHighlighter>

                  </div>
                );
              }


              /* -----------------------------------------------
                 INLINE CODE
              ------------------------------------------------ */

              return (
                <code
                  className="review-inline-code"
                  {...props}
                >
                  {children}
                </code>
              );
            },


            /* =================================================
               BLOCKQUOTE
            ================================================= */

            blockquote: ({ children }) => (
              <blockquote className="review-blockquote">
                {children}
              </blockquote>
            ),


            /* =================================================
               HORIZONTAL LINE
            ================================================= */

            hr: () => (
              <hr className="review-divider" />
            ),


            /* =================================================
               LINKS
            ================================================= */

            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="review-link"
              >
                {children}
              </a>
            ),


            /* =================================================
               TABLE
            ================================================= */

            table: ({ children }) => (
              <div className="review-table-wrapper">

                <table className="review-table">
                  {children}
                </table>

              </div>
            ),


            thead: ({ children }) => (
              <thead>
                {children}
              </thead>
            ),


            tbody: ({ children }) => (
              <tbody>
                {children}
              </tbody>
            ),


            tr: ({ children }) => (
              <tr>
                {children}
              </tr>
            ),


            th: ({ children }) => (
              <th>
                {children}
              </th>
            ),


            td: ({ children }) => (
              <td>
                {children}
              </td>
            ),

          }}
        >

          {reviewText}

        </ReactMarkdown>

      </div>

    </div>
  );
}

export default ReviewPanel;