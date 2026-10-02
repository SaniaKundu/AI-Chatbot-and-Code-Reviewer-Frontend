#  AI Chatbot & Code Reviewer — Frontend


A modern **AI-powered developer workspace** built with **React 19 and Vite**, combining intelligent chat assistance, automated code review, authentication, and personalized history into a unified developer-focused interface.

The application is designed to help developers and learners **ask technical questions, analyze source code, review AI-generated feedback, and manage their previous conversations and reviews** from a secure workspace.

---

## 🚀 Overview

The AI Developer Workspace provides a centralized environment for AI-assisted software development.

### Core Workflow

```text
                         AI DEVELOPER WORKSPACE
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
                    ▼              ▼              ▼
              AI Chatbot       Code Review    User Profile
                    │              │              │
                    └──────────────┼──────────────┘
                                   │
                                   ▼
                         Authenticated Workspace
                                   │
                                   ▼
                           History & Sessions
```

---

## ✨ Key Features

### 🔐 Authentication & Security

* User registration and login
* JWT-based authentication
* Persistent login sessions
* Protected application routes
* User profile management
* Automatic redirection for unauthenticated users

### 🤖 AI Chat Assistant

* Interactive AI programming assistant
* Ask technical and development-related questions
* Continue conversations within the workspace
* Markdown-formatted AI responses
* Syntax highlighting for code snippets
* Conversation history access

### 🧠 AI Code Review

* Dedicated code review workspace
* Source-code editor
* Submit code for AI analysis
* Receive structured AI-generated feedback
* Review code quality, logic, structure, and improvements
* Save and restore previous reviews

### 📚 History Management

* Chat conversation history
* Code review history
* History sidebar for quick navigation
* Restore previous conversations and reviews
* User-specific history

### 🎨 Developer Experience

* Modern developer-focused interface
* Responsive layout
* Premium landing page
* Reusable React components
* Loading and feedback states
* Clean navigation and workspace structure

---

## 🛠️ Technology Stack

| Technology                   | Purpose                                    |
| ---------------------------- | ------------------------------------------ |
| **React 19**                 | Component-based frontend development       |
| **Vite**                     | Fast development and production build tool |
| **React Router DOM**         | Client-side routing and protected routes   |
| **Axios**                    | REST API communication                     |
| **React Markdown**           | Markdown rendering for AI responses        |
| **React Syntax Highlighter** | Code syntax highlighting                   |
| **JavaScript / JSX**         | Application development                    |
| **CSS**                      | UI styling                                 |
| **ESLint**                   | Code quality and consistency               |

---

## 🏗️ System Architecture

```text
                         USER
                           │
                           ▼
                 ┌──────────────────┐
                 │   React Frontend │
                 │   AI Workspace   │
                 └────────┬─────────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
              ▼           ▼           ▼
          Auth Flow    AI Chat     Code Review
              │           │           │
              └───────────┼───────────┘
                          │
                        Axios
                          │
                          ▼
                 ┌──────────────────┐
                 │  Node + Express  │
                 │     Backend      │
                 └────────┬─────────┘
                          │
                  ┌───────┴────────┐
                  ▼                ▼
               MongoDB           Groq AI
                  │                │
                  └───────┬────────┘
                          ▼
                  AI Responses &
                    User History
```

---

## 📁 Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── CodeEditor.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── HistorySidebar.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── ReviewPanel.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── ChatBot.jsx
│   │   ├── CodeReview.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   │
│   ├── services/
│   │   ├── api.jsx
│   │   ├── authApi.jsx
│   │   └── chatApi.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# 🔄 Application Workflows

## 🔐 Authentication Flow

```text
User
 │
 ├── Register
 │      │
 │      ▼
 │   Backend API
 │
 └── Login
        │
        ▼
   JWT Token
        │
        ▼
    localStorage
        │
        ▼
   AuthContext
        │
        ▼
 Protected Routes
```

Protected pages such as:

```text
/profile
/chatbot
/code-review
```

redirect unauthenticated users to:

```text
/login
```

---

## 💬 AI Chat Workflow

```text
User
 │
 ▼
Chat Interface
 │
 ▼
Enter Message
 │
 ▼
Axios Request
 │
 ▼
Backend API
 │
 ▼
Groq AI Service
 │
 ▼
AI Response
 │
 ▼
Markdown Rendering
 │
 ▼
Chat Interface
 │
 ▼
Conversation History
```

---

## 🧠 Code Review Workflow

```text
Developer
    │
    ▼
Code Editor
    │
    ▼
Submit Source Code
    │
    ▼
Axios API Request
    │
    ▼
Backend
    │
    ▼
AI Code Analysis
    │
    ▼
Generated Review
    │
    ▼
ReviewPanel
    │
    ▼
Saved Review History
```

---

# 🔗 API Integration

The frontend communicates with the backend through REST APIs using Axios.

### Authentication

| Method | Endpoint             | Purpose               |
| ------ | -------------------- | --------------------- |
| `POST` | `/api/auth/register` | Register a new user   |
| `POST` | `/api/auth/login`    | Authenticate a user   |
| `GET`  | `/api/auth/profile`  | Retrieve user profile |

### AI Services

| Method | Endpoint         | Purpose                      |
| ------ | ---------------- | ---------------------------- |
| `POST` | `/ai/get-review` | Generate AI code review      |
| `POST` | `/chat/message`  | Send message to AI assistant |

The exact endpoints should match the routes configured in the backend.

---

# 🔑 Environment Configuration

Create a `.env` file in the frontend root:

```env
VITE_API_URL=http://localhost:5000
```

The application accesses the API URL using:

```javascript
import.meta.env.VITE_API_URL
```

> **Security:** Frontend environment variables are exposed to the client after the application is built. Never place private API keys, database credentials, JWT secrets, or other sensitive backend secrets in the frontend.

For GitHub, add `.env` to `.gitignore` and optionally provide an `.env.example` file:

```env
VITE_API_URL=http://localhost:5000
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have:

* **Node.js 18+**
* **npm** or **yarn**
* A running backend API
* Required backend AI and database services configured

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the frontend

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create:

```text
.env
```

and add:

```env
VITE_API_URL=http://localhost:5000
```

### 5. Start the development server

```bash
npm run dev
```

The application will typically be available at:

```text
http://localhost:5173
```

---

# 🏭 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production assets are stored in:

```text
dist/
```

---

# 🧪 Code Quality

Run ESLint:

```bash
npm run lint
```

ESLint helps maintain consistent and maintainable JavaScript and React code.

---

# 🌐 Deployment

The frontend can be deployed to modern static hosting platforms such as:

* Vercel
* Netlify
* Render
* AWS
* Other Vite-compatible hosting providers

Build the application before deployment:

```bash
npm run build
```

Configure the production `VITE_API_URL` in the hosting platform's environment settings.

---

# 🎯 Project Purpose

The AI Developer Workspace demonstrates how modern frontend technologies can be used to build an integrated AI-assisted development environment.

The application focuses on:

* AI-assisted programming
* Automated code review
* Developer productivity
* Secure authentication
* REST API integration
* Persistent user history
* Modular React architecture
* Responsive user experience

---

# 🔮 Future Enhancements

Potential improvements include:

* GitHub repository integration
* Automated Pull Request reviews
* Multi-language code analysis
* AI-powered code optimization
* Code quality scoring
* Vulnerability detection
* AI-generated unit tests
* Streaming AI responses
* Conversation search and filtering
* Developer analytics dashboard
* Code comparison and diff viewer
* Voice-based programming assistant

---

# 📄 License

This project is developed for **educational, portfolio, and demonstration purposes**.

---

## 👨‍💻 Author

**Sania Kundu**
Computer Science & Engineering (AI)

---

### ⭐ Built With

**React 19 • Vite • React Router • Axios • React Markdown • Syntax Highlighting • Node.js • Express • MongoDB • Groq AI**
