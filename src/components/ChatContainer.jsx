import React from "react";
import "./styles/ChatContainer.css";
import Avatar from "@material-ui/core/Avatar";
import { Divider, IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import ChatInput from "./ChatInput";
import Chat from "./Chat";
import { auth } from "../config/firebase";
import { withRouter } from "react-router-dom";
const ChatContainer = ({ history }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => console.log("sign out successfully"))
      .catch((e) => console.log(e.message));
    localStorage.removeItem("isAuth");
    handleClose();
    history.push("/login");
  };

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
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
          </Menu>
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

export default withRouter(ChatContainer);
