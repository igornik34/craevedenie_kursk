import React from "react";
import ChatWS from "../../components/Chat/ChatWS/ChatWS";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import classes from "./Chat.module.css"

function Chat() {
  return (
    <Wrapper className={classes.wrapper}>
      <h1 className={classes.title}>
        <p>Короче...</p>
        <p>Чатик – норм. Не нравится – бан. Оскорбление – бан.</p>
        <p>Оскорбление администрации – расстрел, потом бан</p>
        <p>Всем удачи...</p>
      </h1>
      <ChatWS />
    </Wrapper>
  );
}

export default Chat;
