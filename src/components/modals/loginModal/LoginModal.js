import React, { useState, useEffect } from "react";
import styles from "./LoginModal.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import InputForm from "../../inputs/inputsForm/InputForm";
import authService from "../../../services/auth.service";

const ImageLeft = require("../../../assets/images/northern-lights.jpg");

const LoginModal = (props) => {
  const [user, setUser] = useState({});
  const [userGoogle, setUserGoogle] = useState({});
  const [googleLoginSuccess, setGoogleLoginSuccess] = useState(false);

  useEffect(() => {
    const performGoogleLogin = async () => {
      if (googleLoginSuccess) {
        try {
          const data = await authService.login(userGoogle);
          localStorage.setItem("token", data.token);
          props.setIsOpenModal(false);
        } catch (err) {
          console.log(err);
        }
      }
    };

    performGoogleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleLoginSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(user)
      .then((data) => {
        localStorage.setItem("token", data.token);
        props.setIsOpenModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className={styles.overlay}></div>
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
                  const decodedToken = jwtDecode(data.credential);
                  console.log("Je suis decodedToken = ", decodedToken);
                  setUserGoogle({
                    firstName: decodedToken.family_name,
                    lastName: decodedToken.given_name,
                    email: decodedToken.email,
                    profilePicture: decodedToken.picture,
                    isGoogle: decodedToken.email_verified,
                  });
                  setGoogleLoginSuccess(true);
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
    </div>
  );
};

export default LoginModal;
