import React from "react";
import styles from "./Form.module.css";
const Button = (props) => {
  return (
    <button
      className={styles.Button}
      style={props.style}
      type={`${props.type ? props.type : "button"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
