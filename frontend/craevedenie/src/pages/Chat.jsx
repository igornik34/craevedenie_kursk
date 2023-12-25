import React from "react";
import ChatWS from "../components/ChatWS";
import Wrapper from "../components/UI/Wrapper/Wrapper";

function Chat() {
  return (
    <Wrapper className="min-h-screen flex flex-col pt-20 items-center">
      <h1 className="mb-5 text-xl md:text-3xl mt-16 text-center">
        Короче...
        <br />
        Чатик – норм. Не нравится – бан. Оскорбление – бан. 
        <br />
        Оскорбление администрации – расстрел, потом бан
        <br />
        Всем удачи...
      </h1>
      <ChatWS />
    </Wrapper>
  );
}

export default Chat;
