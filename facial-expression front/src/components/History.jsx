import React from "react";
import "./History.css";
import Header from "./Header";
import img1 from "./assets/Group 4.svg";
import img2 from "./assets/Group 7.svg";
const History = () => {
  return (
    <div>
      <Header />
      <div className="main-history">
        <div className="arrows">
          <i class="fa-solid fa-arrow-left"></i>
          <h3>This Month</h3>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div className="flex-row">
          <div className="circle">
            <img src={img1} alt="image" />
          </div>
          <div className="circle">
            <img src={img2} alt="image" />
          </div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="flex-row">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="flex-row">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="flex-row">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default History;
