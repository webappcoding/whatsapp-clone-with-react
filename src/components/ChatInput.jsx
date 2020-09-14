import IconButton from "@material-ui/core/IconButton";
import Mic from "@material-ui/icons/Mic";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";

import React from "react";
import "./styles/ChatInput.css";

const ChatInput = () => {
  return (
    <div className="chatinput">
      <div className="chatinput__left">
        <IconButton>
          <SentimentSatisfiedOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachmentOutlinedIcon />
        </IconButton>
      </div>
      <form action="#" className="chatinput__form">
        <input name="chat" placeholder="Type a message" />
      </form>
      <div className="chatinput__right">
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatInput;
