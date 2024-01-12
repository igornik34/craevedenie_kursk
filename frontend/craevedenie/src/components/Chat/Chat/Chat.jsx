import React, { useState } from "react";
import Message from "../Message/Message";
import LetterIcon from "../LetterIcon";
import classes from "./Chat.module.css";

function Chat({ connectedUsers, messages, onSendMessage, user }) {
  const [messageValue, setMessageValue] = useState("");
  return (
    <div className={classes.chat}>
      <div className={classes["chat-inner"]}>
        <div className={classes.header}>
          <span className={classes["ping-online"]}>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p>ОНЛАЙН: {connectedUsers}</p>
        </div>
        <div className={classes.messages}>
          {messages.map((msg) => (
            <Message
              mess={msg}
              key={msg.id}
              username={user.username}
              userId={user.userId}
            />
          ))}
        </div>
        <form
          className={classes.form}
          onSubmit={(e) => {
            onSendMessage(e, messageValue);
            setMessageValue("");
          }}
        >
          <div className="relative flex items-center">
            <input
              required
              type="text"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              placeholder="Напиши сообщение..."
            />
            <button type="submit">
              <LetterIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
