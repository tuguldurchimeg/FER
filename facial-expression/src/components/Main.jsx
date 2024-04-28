import React, { useState } from "react";
import Camera from "./Camera";
import "./main.css";
import mainimg from "./assets/Rectangle.svg";
import Header from "./Header";

import ChatBot from "./chatbot/Chatbot";

const Main = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="Body">
      <Header />
      <div className="main flex-row">
        <div className="main-img">
          {showCamera ? <Camera /> : <img src={mainimg} alt="main" />}
          <button
            className="display-cam-btn"
            onClick={() => setShowCamera(!showCamera)}
          >
            {showCamera ? "Камер хаах" : "Камер нээх"}
          </button>
        </div>
        <ChatBot />
      </div>
    </div>
  );
};

export default Main;
