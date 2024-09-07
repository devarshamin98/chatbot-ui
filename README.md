
# Chatbot UI Application Documentation
https://github.com/user-attachments/assets/1a271d37-8fa4-497b-9563-7594721f269d
## Table of Contents
1. [Introduction](#introduction)
2. [Installation and Setup](#installation-and-setup)
3. [Architecture Overview](#architecture-overview)
4. [Key Features](#key-features)
    - [Send a Message](#send-a-message)
    - [Edit a Message](#edit-a-message)
    - [Delete a Message](#delete-a-message)
    - [Chatbot Response](#chatbot-response)
5. [Technical Details](#technical-details)
    - [Frontend (React + TypeScript)](#frontend)
    - [Backend (FastAPI)](#backend)
    - [Data Persistence and Caching](#data-persistence-and-caching)
    - [Error Handling and Edge Cases](#error-handling-and-edge-cases)
6. [Testing Strategy](#testing-strategy)
7. [Accessibility](#accessibility)


---

## 1. Introduction <a name="introduction"></a>

This application is chat widget that allows users to send, edit, and delete messages to a chatbot. This project uses **React** and **TypeScript** for the frontend, and **Python** with **FastAPI** for the backend.

---

## 2. Installation and Setup <a name="installation-and-setup"></a>

### Frontend Setup:
1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd chatbot-ui
   \`\`\`

2. Install dependencies and run the development server:
   \`\`\`bash
   cd frontend
   npm install
   npm start
   \`\`\`

### Backend Setup:
1. Install Python dependencies and run the FastAPI server:
   \`\`\`bash
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   \`\`\`

---

## 3. Architecture Overview <a name="architecture-overview"></a>

- **Frontend**: React with TypeScript, handling UI.
- **Backend**: FastAPI server for handling API requests.
- **Data Persistence**: Optionally integrates JWT(JSON Web token) for user authentication.

---

## 4. Key Features <a name="key-features"></a>

### Send a Message <a name="send-a-message"></a>
Users can send a message from availaible services offered by the AI agent chatbot.

### Edit a Message <a name="edit-a-message"></a>
Users can edit any message they’ve sent by clicking the **edit** icon next to the message.

### Delete a Message <a name="delete-a-message"></a>
Messages can be deleted using the **delete** icon.

### Chatbot Response <a name="chatbot-response"></a>
The backend chatbot responds based on predefined conditions (e.g., responding to "hello" with "Hello! How can I help you?").

---

## 5. Technical Details <a name="technical-details"></a>

### Frontend (React + TypeScript) <a name="frontend"></a>
- **App.tsx**: Handles user login and token storage. Renders the `Chatbot` component if the user is authenticated.
- **Chatbot.tsx**: Manages the chat UI and handles sending, editing, and deleting messages.
- **Login.tsx**: Collects user credentials and sends them to the backend to receive a JWT.

### Backend (FastAPI) <a name="backend"></a>
- **/token**: Provides user authentication and JWT generation.
- **/send-message/**: Receives a message and returns a chatbot response based on the message content.

---

## 6. Testing Strategy <a name="testing-strategy"></a>
Tests are implemented using **pytest** for the backend and **Jest** for the frontend.

## 7 Accessibility <a name="accessibility"></a>
Setting button to change the color of the ChatWidget, from given colors.

## 8 Enhancements 
Upon selecting smart mode, Chatbot can leverage LLM with provided API key, after replacing in Chatbot.tsx file, to use RAG based service for the user request.

## Please check the commit history to learn interations.

