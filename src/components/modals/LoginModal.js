import React, { useState } from "react";
import styles from "./LoginModal.module.scss";
import { GoogleLogin } from "@react-oauth/google";

import InputForm from "../inputs/inputsForm/InputForm";
import authService from "../../services/auth.service";

const ImageLeft = require("../../assets/images/northern-lights.jpg");

const LoginModal = (props) => {
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((data) => {
        localStorage.setItem("token", data.token);
        props.setIsOpenModal(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__container_left}>
        <img src={ImageLeft} alt="northern-lights" />
      </div>
      <div className={styles.modal__container_right}>
        <div className={styles.modal__container_right_title}>
          <h2>Inscrivez-vous pour débuter</h2>
        </div>
        <div className={styles.modal__container_login}>
          <div className={styles.modal__container_right_login_btn}>
            <GoogleLogin
              size="large"
              text="Continuez avec Google"
              shape="circle"
              logo_alignment="left"
              width="300"
              onSuccess={(data) => {
                localStorage.setItem("tokenGoogle", data.credential);
                props.setIsOpenModal(false)
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
        <div className={styles.modal__container_right_text}>
          <h3>Sinon, remplissez les champs c-dessous</h3>
        </div>
        <div className={styles.modal__container_right_form}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <InputForm
              placeholder="EMAIL"
              required={true}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <InputForm
              placeholder="MOT DE PASSE"
              required={true}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <input
              className={styles.modal__container_right_validate}
              value="C'est parti"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
