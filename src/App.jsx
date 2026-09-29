import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ChatBot from "./pages/ChatBot";
import CodeReview from "./pages/CodeReview";

import "./App.css";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar />

      <Routes>

        {/* Home - Public */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isLoggedIn
              ? <Navigate to="/profile" replace />
              : <Login />
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            isLoggedIn
              ? <Navigate to="/profile" replace />
              : <Register />
          }
        />

        {/* Profile - Login Required */}
        <Route
          path="/profile"
          element={
            isLoggedIn
              ? <Profile />
              : <Navigate to="/login" replace />
          }
        />

        {/* AI Chatbot - Login Required */}
        <Route
          path="/chatbot"
          element={
            isLoggedIn
              ? <ChatBot />
              : <Navigate to="/login" replace />
          }
        />

        {/* Code Reviewer - Login Required */}
        <Route
          path="/code-review"
          element={
            isLoggedIn
              ? <CodeReview />
              : <Navigate to="/login" replace />
          }
        />

        {/* Invalid URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </>
  );
}

export default App;