import React from "react";
import style from "./Clear.module.css";

function Clear(props) {
  return (
    <button onClick={props.handleOnClick} className={style.clear}>
      {props.children}
    </button>
  );
}

export default Clear;
