import React from "react";
import "./styles/ChatContainer.css";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import ChatInput from "./ChatInput";
const ChatContainer = () => {
  return (
    <div className="chatContainer">
      <div className="chatContainer__header">
        <div className="chatContainer__headerLeft">
          <Avatar />
          <h3>Room Name</h3>
        </div>
        <div className="chatContainer__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatContainer__body">Chat Body</div>
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
