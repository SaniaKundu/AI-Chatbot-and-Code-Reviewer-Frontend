import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="status-dot" /> Powered by Groq AI
            </div>

            <p className="hero-kicker">YOUR NEXT DEVELOPER WORKSPACE</p>

            <h1>
              Think clearly.
              <span>Ship boldly.</span>
            </h1>

            <h3>
              One focused space for better code and faster answers.
            </h3>

            <p>
              Review code with context, ask sharper questions, and turn
              debugging sessions into momentum.
            </p>

            <div className="hero-buttons">
              <Link to="/code-review">
                <span className="primary-btn">Open Code Reviewer <span>↗</span></span>
              </Link>

              <Link to="/chatbot">
                <span className="secondary-btn">Talk to AI <span>→</span></span>
              </Link>
            </div>

            <div className="hero-trust">
              <span>⌘</span> Built for thoughtful builders <i /> <span>24/7</span> AI assistance
            </div>
          </div>

          <div className="hero-preview" aria-label="AI workspace preview">
            <div className="preview-topbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>workspace / review.js</span>
              <b>•••</b>
            </div>
            <div className="preview-body">
              <div className="preview-code">
                <span className="code-comment">// make the next release count</span>
                <span><em>const</em> review = <strong>await</strong> ai.analyze(code);</span>
                <span className="code-indent"><em>if</em> (review.ready) {'{'}</span>
                <span className="code-indent-2">ship({" "}<mark>"with confidence"</mark>);</span>
                <span className="code-indent">{'}'}</span>
              </div>
              <div className="preview-insight">
                <div className="insight-label"><span className="status-dot green" /> REVIEW COMPLETE</div>
                <strong>Looks good.</strong>
                <p>2 opportunities to simplify this function.</p>
                <div className="insight-progress"><span /></div>
                <small>Quality score <b>92</b></small>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="features" className="features">

        <p className="section-kicker">THE TOOLKIT</p>
        <h2>Everything you need to stay in flow.</h2>

        <p className="feature-title">
          Powerful AI tools for developers and learners.
        </p>

        <div className="feature-grid">

          <FeatureCard
            icon="⚡"
            title="Fast AI Response"
            description="Get instant and accurate responses from AI."
            buttonText="Explore"
            link="/chatbot"
          />

          <FeatureCard
            icon="💻"
            title="Smart Code Analysis"
            description="Detect bugs and improve your coding practices."
            buttonText="Review Code"
            link="/code-review"
          />

          <FeatureCard
            icon="💬"
            title="AI Chatbot"
            description="Ask programming questions and generate code."
            buttonText="Start Chat"
            link="/chatbot"
          />

          <FeatureCard
            icon="🔒"
            title="Secure Platform"
            description="Authentication using JWT and MongoDB."
            buttonText="Learn More"
            link="/login"
          />

        </div>

      </section>

      <section className="stats">

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Users</p>
        </div>

        <div className="stat-card">
          <h2>10000+</h2>
          <p>Code Reviews</p>
        </div>

        <div className="stat-card">
          <h2>5000+</h2>
          <p>AI Chats</p>
        </div>

        <div className="stat-card">
          <h2>99.9%</h2>
          <p>Uptime</p>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;