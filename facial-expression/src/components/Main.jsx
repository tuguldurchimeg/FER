import React, { useState, useRef } from "react";
import Camera from "./Camera";
import "./main.css";
import mainimg from "./assets/Rectangle.svg";
import Header from "./Header";
import ThemedExample from "./ThemedExample";

const Main = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="Body">
      <Header />
      <div className="main flex-row">
        <div className="main-img">
          <img src={mainimg} alt="main" />
          <button
            className="display-cam-btn"
            onClick={() => setShowCamera(!showCamera)}
          >
            {showCamera ? "Hide Camera" : "Show Camera"}
          </button>
          {showCamera && (
            <div className="cam-container">
              <Camera />
            </div>
          )}
        </div>
        <ThemedExample />
      </div>
    </div>
  );
};

export default Main;
