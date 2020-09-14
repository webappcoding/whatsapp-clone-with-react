import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./styles/SideBar.css";
import { SearchOutlined } from "@material-ui/icons";
import ChatRoom from "./ChatRoom";
import AddChatRoom from "./AddChatRoom";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <SearchOutlined className="sidebar__searchIcon" />
        <input
          type="text"
          placeholder="Search or start new chat.."
          className="sidebar__searchInput"
        />
      </div>
      <div className="sidebar__body">
        <AddChatRoom />
        <ChatRoom />
        <ChatRoom />
      </div>
    </div>
  );
};

export default SideBar;
