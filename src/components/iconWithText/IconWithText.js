import React from "react";
import styles from "./IconWithText.module.scss";

const IconWithText = (props) => {
  const handleClick = () => {
    props.onClick && props.onClick();
  };

  return (
    <div onClick={handleClick} className={styles.iconWithText__container}>
      <img src={props.icon} alt="icon" />
      {(props.color === "grey" && (
        <p className={styles.iconWithText__text_grey}>{props.text}</p>
      )) ||
        (props.color === "white" && (
          <p className={styles.iconWithText__text_white}>{props.text}</p>
        )) ||
        (props.color === "black" && (
          <p className={styles.iconWithText__text_black}>{props.text}</p>
        ))}
    </div>
  );
};

export default IconWithText;
