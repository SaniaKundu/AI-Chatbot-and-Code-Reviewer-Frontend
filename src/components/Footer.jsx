function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2><span className="footer-mark">✦</span> AI Platform</h2>

          <p>
            Your all-in-one platform for AI-powered
            code review and intelligent chatbot.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="/code-review">Code Review</a>
          <a href="/chatbot">Chatbot</a>
        </div>

        <div className="footer-box">
          <h3>Support</h3>

          <a href="mailto:support@aiplatform.com">support@aiplatform.com</a>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 AI Platform | React • Express • MongoDB • Groq AI
      </p>

    </footer>
  );
}

export default Footer;