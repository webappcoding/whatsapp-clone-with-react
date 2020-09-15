import React from "react";
import "./styles/ChatContainer.css";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import ChatInput from "./ChatInput";
import Chat from "./Chat";
const ChatContainer = () => {
  return (
    <div className="chatContainer">
      <div className="chatContainer__header">
        <div className="chatContainer__headerLeft">
          <Avatar src="https://avatars.dicebear.com/api/human/shajsjgasd.svg" />
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
      <div className="chatContainer__body">
        <Chat />
        <Chat right />
        <Chat />
        <Chat right />
        <Chat right />
        {/* {process.env.REACT_APP_NOT_SECRET_CODE} */}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
