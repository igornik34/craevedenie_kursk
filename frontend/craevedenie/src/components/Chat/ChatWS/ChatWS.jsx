import React, { useState, useRef, useEffect } from "react";
import getTime from "../../../utils/getTime";
import Message from "../Message/Message";
import Auth from "../Auth/Auth";
import Chat from "../Chat/Chat";
function ChatWS() {
  const [messages, setMessages] = useState([]);

  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState(0);
  const [user, setUser] = useState({
    username: "",
    userId: "",
  });

  function connect() {
    socket.current = new WebSocket("ws://127.0.0.1:8000/ws/chat/");

    socket.current.onopen = () => {
      setConnected(true);
      console.log("Подключение установлено");
      const message = {
        event: "connection",
        id: Date.now(),
        username: user.username,
      };
      socket.current.send(JSON.stringify(message));
    };

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.event === "user_count") {
        setConnectedUsers(data.count);
      } else {
        setMessages((prev) => [data.message, ...prev]);
      }
    };

    socket.current.onclose = () => {};

    socket.current.onerror = () => {
      console.log("socket error");
    };
  }

  const sendMessage = (e, messageValue) => {
    e.preventDefault();
    if (messageValue) {
      const message = {
        username: user.username,
        userId: user.userId,
        message: messageValue,
        time: getTime(),
        event: "message",
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
    }
  };

  return !connected ? (
    <Auth username={user.username} onUpdateUser={setUser} onConnect={connect} />
  ) : (
    <Chat
      connectedUsers={connectedUsers}
      onSendMessage={sendMessage}
      user={user}
      messages={messages}
    />
  );
}
export default ChatWS;
