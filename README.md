# AI Chatbot & Code Reviewer — Frontend

A modern **React 19 + Vite frontend** for an AI-powered developer platform that combines an intelligent chatbot and automated code review into a single developer-focused application.

The platform allows developers and learners to **ask programming-related questions, submit source code for AI-powered analysis, receive actionable feedback, and manage their previous conversations and code reviews** through an authenticated workspace.

---

## 🚀 Overview

The **AI Chatbot & Code Reviewer** frontend provides two core AI-powered capabilities:

### 🤖 AI Chatbot

An interactive programming assistant that helps users ask technical questions, understand concepts, troubleshoot code, and continue AI-powered conversations.

### 🧠 AI Code Reviewer

A dedicated workspace where users can submit source code and receive AI-generated feedback related to code quality, logic, structure, readability, maintainability, and potential improvements.

Both features are integrated with a backend REST API and support user-specific history.

---

## ✨ Key Features

### 🤖 AI Chatbot

* Interactive AI programming assistant
* Ask technical and programming questions
* Continue conversations within the application
* Markdown-formatted AI responses
* Syntax highlighting for code snippets
* Conversation history
* History sidebar for previous conversations

### 🧠 AI Code Reviewer

* Dedicated code review workspace
* Source-code editor
* Submit code for AI analysis
* AI-generated code review
* Actionable improvement suggestions
* Structured review results
* Syntax-highlighted code
* Save and restore previous reviews

### 🔐 Authentication

* User registration
* User login
* JWT-based authentication
* Persistent authentication using `localStorage`
* Protected application routes
* User profile management
* Automatic redirection for unauthenticated users

### 📚 History Management

* Chat conversation history
* Code review history
* User-specific saved data
* History sidebar navigation
* Restore previous conversations and reviews

### 🎨 User Experience

* Modern developer-focused interface
* Responsive design
* Clean navigation
* Premium landing page
* Reusable React components
* Loading states
* Markdown rendering
* Syntax highlighting

---

## 🛠️ Technology Stack

| Technology                   | Purpose                             |
| ---------------------------- | ----------------------------------- |
| **React 19**                 | Frontend UI development             |
| **Vite**                     | Development server and build tool   |
| **React Router DOM**         | Client-side routing                 |
| **Axios**                    | REST API communication              |
| **React Markdown**           | Markdown rendering for AI responses |
| **React Syntax Highlighter** | Code syntax highlighting            |
| **JavaScript / JSX**         | Application development             |
| **CSS**                      | UI styling                          |
| **ESLint**                   | Code quality and consistency        |

---

## 🏗️ Application Architecture

```text
                         USER
                           │
                           ▼
              ┌────────────────────────┐
              │   React + Vite         │
              │       Frontend         │
              └────────────┬───────────┘
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
        Authentication   AI Chat      Code Review
             │             │             │
             └─────────────┼─────────────┘
                           │
                         Axios
                           │
                           ▼
              ┌────────────────────────┐
              │    Node.js + Express   │
              │        Backend         │
              └────────────┬───────────┘
                           │
                  ┌────────┴────────┐
                  ▼                 ▼
               MongoDB            Groq AI
                  │                 │
                  └────────┬────────┘
                           ▼
                  AI Responses &
                    User History
```

---

# 📁 Project Structure

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

## 🤖 AI Chatbot Workflow

```text
User
 │
 ▼
Chat Interface
 │
 ▼
Enter Programming Question
 │
 ▼
Axios API Request
 │
 ▼
Backend API
 │
 ▼
Groq AI Service
 │
 ▼
AI Generated Response
 │
 ▼
React Markdown
 │
 ▼
Chat Interface
 │
 ▼
Conversation History
```

---

## 🧠 AI Code Review Workflow

```text
Developer
    │
    ▼
Code Editor
    │
    ▼
Enter / Paste Source Code
    │
    ▼
Submit for Review
    │
    ▼
Axios API Request
    │
    ▼
Backend API
    │
    ▼
AI Code Analysis
    │
    ▼
Generated Review
    │
    ▼
Review Panel
    │
    ▼
Saved Review History
```

---

# 🔐 Authentication Flow

The application uses JWT-based authentication integrated with the backend.

```text
                 User
                  │
          ┌───────┴────────┐
          │                │
       Register           Login
          │                │
          └───────┬────────┘
                  ▼
             Backend API
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

Protected pages include:

```text
/profile
/chatbot
/code-review
```

Unauthenticated users are redirected to:

```text
/login
```

---

# 🔗 API Integration

The frontend communicates with the backend through REST APIs using Axios.

## Authentication APIs

| Method | Endpoint             | Purpose                             |
| ------ | -------------------- | ----------------------------------- |
| `POST` | `/api/auth/register` | Register a new user                 |
| `POST` | `/api/auth/login`    | Authenticate a user                 |
| `GET`  | `/api/auth/profile`  | Retrieve authenticated user profile |

## AI APIs

| Method | Endpoint         | Purpose                          |
| ------ | ---------------- | -------------------------------- |
| `POST` | `/ai/get-review` | Generate an AI code review       |
| `POST` | `/chat/message`  | Send a message to the AI chatbot |

> Endpoint paths should match the routes configured in the backend application.

---

# 🔑 Environment Configuration

Create a `.env` file in the frontend root:

```env
VITE_API_URL=http://localhost:5000
```

The frontend accesses the backend URL using:

```javascript
import.meta.env.VITE_API_URL
```

For example:

```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

### Security

Do not store the following in the frontend:

* Groq API keys
* MongoDB credentials
* JWT secrets
* Database passwords
* Private backend credentials

Frontend environment variables are exposed to the client-side application after the build.

---

# ⚙️ Getting Started

## Prerequisites

Before running the application, make sure you have:

* **Node.js 18+**
* **npm** or **yarn**
* A running backend API
* Required backend AI and database services configured

---

## 1. Clone the Repository

```bash
git clone <your-repository-url>
```

---

## 2. Navigate to the Frontend

```bash
cd frontend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create:

```text
.env
```

Add:

```env
VITE_API_URL=http://localhost:5000
```

Replace the URL with your actual backend server address if required.

---

## 5. Start the Development Server

```bash
npm run dev
```

The application will typically run at:

```text
http://localhost:5173
```

Make sure the backend server is running for authentication, chatbot, code review, and history functionality.

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

The production-ready files are generated in:

```text
dist/
```

---

# 🧪 Code Quality

Run ESLint:

```bash
npm run lint
```

ESLint helps maintain consistent, readable, and maintainable React/JavaScript code.

---

# 🧩 Core Components

### `ChatBox.jsx`

Provides the main interface for entering and sending messages to the AI chatbot.

### `ChatMessage.jsx`

Renders individual user and AI messages with Markdown and code formatting support.

### `CodeEditor.jsx`

Provides the interface for entering or pasting source code before submitting it for AI review.

### `ReviewPanel.jsx`

Displays AI-generated code-review results in a structured format.

### `HistorySidebar.jsx`

Provides access to previous chatbot conversations and code-review sessions.

### `Navbar.jsx`

Handles application navigation, authentication state, and user profile access.

### `AuthContext.jsx`

Maintains authentication state and restores the user's session after page refresh.

### `api.jsx`

Handles API communication related to AI code-review functionality.

### `authApi.jsx`

Manages authentication-related API requests.

### `chatApi.jsx`

Handles communication between the chatbot interface and backend chat APIs.

---

# 🎯 Project Purpose

The **AI Chatbot & Code Reviewer** is designed as an AI-assisted developer productivity platform.

It helps users:

* Ask programming and technical questions
* Understand complex development concepts
* Analyze source code
* Identify potential code issues
* Receive AI-generated improvement suggestions
* Review previous AI conversations
* Manage previous code-review results
* Work within an authenticated developer workspace

---

# 🌐 Deployment

The frontend can be deployed on modern hosting platforms such as:

* Vercel
* Netlify
* Render
* AWS
* Other Vite-compatible static hosting platforms

Before deployment:

```bash
npm run build
```

Configure the production backend URL through the hosting platform's environment variables:

```env
VITE_API_URL=https://your-production-backend-url
```

---

# 🔮 Future Enhancements

Potential future improvements include:

* GitHub repository integration
* Automated Pull Request code reviews
* Multi-language code analysis
* AI-powered code optimization
* Code quality scoring
* Security and vulnerability analysis
* AI-generated unit tests
* Streaming AI responses
* Conversation search and filtering
* Code comparison and diff viewer
* Developer analytics dashboard
* Voice-based AI programming assistant

---

# 📄 License

This project is developed for **educational, portfolio, and demonstration purposes**.

---

# 👨‍💻 Author

**Sania Kundu**

Computer Science & Engineering (AI)

---

## ⭐ Project Highlights

```text
AI Chatbot
     +
AI Code Reviewer
     +
JWT Authentication
     +
REST API Integration
     +
MongoDB Persistence
     +
Groq AI
     +
React 19 + Vite
```

---

**Built for an intelligent, secure, and productive AI-assisted developer workflow.**
