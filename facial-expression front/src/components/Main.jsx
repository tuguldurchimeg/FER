import React from "react";

import "./main.css";
import mainimg from "./assets/Rectangle.svg";
import chatbot from "./assets/image 1.svg";
import Header from "./Header";
const Main = () => {
  return (
    <div className="Body">
      <Header />
      <div className="main flex-row">
        <div className="main-img">
          <img src={mainimg} alt="main" />
          <button className="camera">Camera</button>
        </div>
        <div class="chatbot-section">
          <div class="para">
            <p>Hello. I am chatbot. Are you feeling lonely?</p>
          </div>

          <div class="buttons flex-start">
            <button class="yes-btn">YES</button>
            <button class="no-btn">No</button>
          </div>

          <div class="para">
            <p>Hello. I am chatbot. Are you feeling lonely?</p>
          </div>

          <div class="buttons flex-start">
            <button class="yes-btn">YES</button>
            <button class="no-btn">No</button>
          </div>

          <div class="para">
            <p>Hello. I am chatbot. Are you feeling lonely?</p>
          </div>

          <div class="buttons flex-start">
            <button class="yes-btn">YES</button>
            <button class="no-btn">No</button>
          </div>
          <div className="chatbot-logo">
            <input type="text" id="input" placeholder="text here" />
            <img src={chatbot} alt="chatbot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
