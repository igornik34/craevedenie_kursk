import React, { useState, useRef, useEffect } from "react";
import { v1 } from "uuid";
import getTime from "../utils/getTime";
import Message from "./Message";
function ChatWS() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const socket = useRef();
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [connectedUsers, setConnectedUsers] = useState(0);

  function connect() {
    socket.current = new WebSocket("ws://80.249.145.28/ws/chat/");

    socket.current.onopen = () => {
      setConnected(true);
      console.log("Подключение установлено");
      const message = {
        event: "connection",
        id: Date.now(),
        username,
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

  const sendMessage = () => {
    const message = {
      username,
      userId,
      message: value,
      time: getTime(),
      event: "message",
      id: Date.now(),
    };
    socket.current.send(JSON.stringify(message));
    setValue("");
  };

  const authUser = () => {
    if (localStorage.getItem("chatKurskUserId") === null) {
      const userId = v1();
      localStorage.setItem("chatKursk", userId);
      setUsername(username);
      setUserId(userId);
    } else {
      const userId = localStorage.getItem("chatKursk");
      setUsername(username);
      setUserId(userId);
    }
    if (username) {
      connect();
    }
  };
  if (!connected) {
    return (
      <div className="bg-slate-600 max-w-md w-full text-white py-5 rounded-md shadow-2xl p-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold mb-3">Вход</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <input
              type="text"
              className="block w-full rounded-md p-3 pe-16 text-lg border focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  authUser();
                }
              }}
              placeholder="Напиши имя..."
            />
            <button
              className="bg-lime-500 duration-200 hover:bg-lime-400 px-4 py-2 rounded-md leading-tight text-lg font-semibold text-white"
              onClick={authUser}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-4xl w-full shadow-2xl ">
        <div className="bg-[#222] rounded-tr-md rounded-tl-md  text-white">
          <div className="border-b border-slate-400 py-2 px-2 flex items-center justify-end gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p>ОНЛАЙН: {connectedUsers}</p>
          </div>
          <div className="messages flex flex-col-reverse gap-4 h-[60vh] p-4 overflow-y-auto scrollbar ">
            {messages.map((mess) => (
              <Message
                mess={mess}
                key={mess.id}
                username={username}
                userId={userId}
              />
            ))}
          </div>
          <div className="form">
            <div className="relative flex items-center">
              <input
                className="block w-full p-4 pe-16 text-lg border rounded-br-md rounded-bl-md focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                required
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && value) {
                    sendMessage();
                  }
                }}
                placeholder="Напиши сообщение..."
              />
              <button
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={() => {
                  if (value) sendMessage();
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="send_24__Page-2"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="send_24__send_24">
                      <path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path>
                      <path
                        d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z"
                        id="send_24__Mask"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChatWS;
