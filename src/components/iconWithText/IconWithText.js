import React from "react";
import styles from "./IconWithText.module.scss";

const IconWithText = (props) => {

  const handleDeleteClick = (event) => {
    props.deleteClick && props.deleteClick();
  };

  const handleClick = () => {
    props.onClick && props.onClick();
  };

  return (
    <div onClick={handleClick} className={styles.iconWithText__container}>
      <img src={props.icon} alt="icon" />
      <div className={styles.iconWithText__container_body}>
        <div className={styles.iconWithText__container_body_text}>
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
        <div className={styles.iconWithText__container_closeIcon}>
          {props.closeIcon && (
            <img
              onClick={handleDeleteClick}
              src={props.closeIcon}
              alt="close icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IconWithText;
