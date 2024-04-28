import React from "react";
import ChatbotH from "react-chatbot-kit";
import "./chatboth.css";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "react-chatbot-kit/build/main.css";

function ChatBot() {
  return (
    <div className="App">
      <ChatbotH
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatBot;
