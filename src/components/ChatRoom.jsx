import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/ChatRoom.css";
const ChatRoom = ({ data }) => {
  return (
    <Link to={`/rooms/${data.id}`}>
      <div className="chatroom">
        <div className="chatroom__left">
          <Avatar />
          <div className="chatroom__leftContent">
            <h4>{data.name}</h4>
            <p>Last message..</p>
          </div>
        </div>
        <div className="chatroom__right">
          <span>Yesterday</span>
        </div>
      </div>
    </Link>
  );
};

export default ChatRoom;
