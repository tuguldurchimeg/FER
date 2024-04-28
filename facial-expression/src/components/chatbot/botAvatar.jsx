// BotAvatar.js
import React from "react";
import logo from "../assets/.gitignore.svg";

const BotAvatar = (props) => {
  // Define your custom bot avatar component here
  const avatarStyle = {
    width: "50px", // Adjust width as needed
    height: "50px", // Adjust height as needed
    borderRadius: "50%", // Make it circular
    border: "2px solid #65D46E", // Add a border
    left: "0",
  };

  return (
    <div>
      <img src={logo} alt="Bot Avatar" style={avatarStyle} />
    </div>
  );
};

export default BotAvatar;
