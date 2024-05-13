import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./botAvatar";
import LearningOptions from "./learn";
import LinkList from "./LinkList";

const config = {
  botName: "Emotion Bot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. Do you feel sad ?"),
  ],
  widgets: [
    {
      widgetName: "happyLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Movie",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Song",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Help Section",
            url: "http://localhost:3000/Help",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "sadLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Movie",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Song",
            url:
              "https://open.spotify.com/playlist/5754p2SZ33ytfRDePSJLVH?si=1389d94a17c74ad3",
            id: 2,
          },
          {
            text: "Help Section",
            url: "http://localhost:3000/Help",
            id: 3,
          },
        ],
      },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#65D46E",
    },
    chatButton: {
      backgroundColor: "#65D46E",
    },
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "black",
          padding: "5px",
          color: "white",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        Emotion Bot
      </div>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;
