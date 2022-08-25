import React from "react";
import style from "./Screen.module.css";

function Screen({ input }) {
  return <div className={style.screen}>{input}</div>;
}

export default Screen;
