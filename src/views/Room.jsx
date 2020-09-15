import React from "react";
import ChatContainer from "../components/ChatContainer";
import SideBar from "../components/SideBar";

const ChatRoom = () => {
  return (
    <React.Fragment>
      <SideBar />
      <ChatContainer />
    </React.Fragment>
  );
};

export default ChatRoom;
