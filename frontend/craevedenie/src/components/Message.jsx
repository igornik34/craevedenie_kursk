import React from "react";

function Message({mess, userId}) {
  console.log(`${userId} ${mess.userId}`);
  return (
    <div>
      {mess.event === "connection" ? (
        <div className="message text-center">
          <b>{mess.username}</b> подключился к чату
        </div>
      ) : (
        <div
          className={`message bg-lime-300 p-2 w-fit rounded-md text-[#222] ${
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
    </div>
  );
}

export default Message;
