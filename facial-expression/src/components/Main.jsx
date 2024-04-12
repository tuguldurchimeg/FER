import React from "react";

import "./main.css";
import mainimg from "./assets/Rectangle.svg";
import Header from "./Header";
import ThemedExample from "./ThemedExample";
const Main = () => {
  return (
    <div className="Body">
      <Header />
      <div className="main flex-row">
        <div className="main-img">
          <img src={mainimg} alt="main" />
          <button className="camera">Camera</button>
        </div>
      <ThemedExample/>
      </div>
    </div>
  );
};

export default Main;
