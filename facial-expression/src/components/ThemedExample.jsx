import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import "./chatbot.css";

const theme = {
  background: "black",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#65d46e",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#65d46e",
  botFontColor: "#fff",
  userBubbleColor: "white",
  userFontColor: "#4a4a4a",
};

const HtmlMessage = ({ children }) => <div>{children}</div>;

const steps = [
  {
    id: "1",
    message: "Hi, are you feeling sad?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Yes", trigger: "4" },
      { value: 2, label: "No", trigger: "3" },
    ],
  },
  {
    id: "3",
    message: "That's great!",
    end: true,
  },
  {
    id: "4",
    message: "Do you want to feel more sad or more happy?",
    trigger: "5",
  },
  {
    id: "5",
    options: [
      { value: 1, label: "More Happy", trigger: "6" },
      { value: 2, label: "More Sad", trigger: "7" },
    ],
  },
  {
    id: "6",
    component: (
      <HtmlMessage>
        <div className="href">
          <a
            href="https://wowkino.one/tyn/tv-series-20027.html"
            className="moreH"
          >
            Happy Movies
          </a>
          <a href="https://wowkino.one/tyn/tv-series-20027.html">Happy Songs</a>
        </div>
      </HtmlMessage>
    ),
    end: true,
  },
  {
    id: "7",
    component: (
      <HtmlMessage>
        <div className="href">
          <a
            href="https://wowkino.one/tyn/tv-series-20027.html"
            className="moreH"
          >
            {" "}
            Sad Movies
          </a>
          <a href="https://wowkino.one/tyn/tv-series-20027.html">Sad Songs</a>
        </div>
      </HtmlMessage>
    ),
    end: true,
  },
];

function ThemedExample() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
}

export default ThemedExample;
