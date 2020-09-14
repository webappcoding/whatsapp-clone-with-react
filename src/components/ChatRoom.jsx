import { Avatar } from "@material-ui/core";
import React from "react";
import "./styles/ChatRoom.css";
const ChatRoom = () => {
  return (
    <div className="chatroom">
      <div className="chatroom__left">
        <Avatar />
        <div className="chatroom__leftContent">
          <h4>Room Name</h4>
          <p>Last message..</p>
        </div>
      </div>
      <div className="chatroom__right">
        <span>Yesterday</span>
      </div>
    </div>
  );
};

export default ChatRoom;
