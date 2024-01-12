import React from "react";
import classes from "./Message.module.css"

function Message({mess, userId}) {
  return (
    <>
      {mess.event === "connection" ? (
        <div className="message text-center">
          <b>{mess.username}</b> подключился к чату
        </div>
      ) : (
        <div
          className={`${classes.message} ${
            mess.userId === userId ? "ml-auto" : " text-left"
          }`}
          key={mess.id}
        >
          <p><b>{mess.username}</b> <i>{mess.time}</i></p> 
          <p className="break-all">
            {mess.message} 
          </p>
        </div>
      )}
    </>
  );
}

export default Message;
