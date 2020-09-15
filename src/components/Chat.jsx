import React from "react";
import "./styles/Chat.css";
const Chat = ({ right }) => {
  return (
    <div
      className="chat"
      style={{ flexDirection: right ? "row-reverse" : "row" }}
    >
      <div className="chat__body">
        <h5 className="chat__user">Deepak Kumar</h5>
        <div
          className={
            right
              ? "chat__content chat__content--green"
              : "chat__content chat__content--white"
          }
        >
          <p>Hi this is web app coding here..</p>
          <dt>8:30 am</dt>
        </div>
      </div>
    </div>
  );
};

export default Chat;
