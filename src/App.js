import { Box } from "@material-ui/core";
import React from "react";
import "./App.css";
import ChatContainer from "./components/ChatContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Box className="app__body">
        <SideBar />
        <ChatContainer />
      </Box>
    </div>
  );
}

export default App;
