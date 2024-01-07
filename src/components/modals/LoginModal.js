import React from "react";
import styles from "./LoginModal.module.scss";

const ImageLeft = require("../../assets/images/northern-lights.jpg");

const LoginModal = () => {
  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__container_left}>
        <img src={ImageLeft} alt="northern-lights" />
      </div>
      <div className={styles.modal__container_right}>
        <div className={styles.modal__container_right_title}>
          <h2>Inscrivez-vous pour débuter</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
