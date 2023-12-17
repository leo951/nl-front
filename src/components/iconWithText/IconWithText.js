import React from "react";
import styles from "./IconWithText.module.scss"

const IconWithText = (props) => {
  return (
    <div className={styles.iconWithText__container}>
      <img src={props.icon} alt="icon" />
      <p>{props.text}</p>
    </div>
  );
};

export default IconWithText;
