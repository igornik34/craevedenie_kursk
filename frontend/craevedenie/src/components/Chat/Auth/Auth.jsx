import React from "react";
import { v1 } from "uuid";
import classes from "./Auth.module.css";

function Auth({ username, onUpdateUser, onConnect }) {
  const authUser = (e) => {
    e.preventDefault();
    if (localStorage.getItem("chatUserId") === null) {
      const userId = v1();
      localStorage.setItem("chatUserId", userId);
      onUpdateUser((prev) => ({ userId: userId, ...prev }));
    } else {
      const userId = localStorage.getItem("chatUserId");
      onUpdateUser((prev) => ({ userId: userId, ...prev }));
    }
    if (username) {
      onConnect();
    }
  };

  return (
    <div className={classes.card}>
      <div className={classes["card-inner"]}>
        <h2 className={classes.title}>Вход</h2>
        <form className={classes.form} onSubmit={authUser}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              console.log(username);
              onUpdateUser({ username: e.target.value });
            }}
            placeholder="Напиши имя..."
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
