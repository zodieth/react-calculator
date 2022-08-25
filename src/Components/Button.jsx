import React from "react";
import style from "./Button.module.css";

function Button(props) {
  return (
    <div className={style.container}>
      <button
        onClick={() => props.handleOnClick(props.children)}
        className={style.button}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
