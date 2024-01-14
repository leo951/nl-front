import React, { useState, useEffect } from "react";
import styles from "./LoginModal.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import InputForm from "../inputs/inputsForm/InputForm";
import authService from "../../services/auth.service";

const ImageLeft = require("../../assets/images/northern-lights.jpg");

const LoginModal = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("Je suis token = ", token.email);
    setUser({
      email: token.email,
      firstName: token.family_name,
      lastName: token.given_name,
    });
  }, [token]);

  useEffect(() => {
    console.log("Je suis user = ", user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Je suis e = ", e);
    // authService
    //   .login(user)
    //   .then((data) => {
    //     if (data.message) {
    //       return false;
    //     }
    //     localStorage.setItem("token", data.token);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
                setToken(jwtDecode(data.credential));
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
              placeholder="PRÉNOM"
              required={true}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
            />
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
          </form>
        </div>
        <div className={styles.modal__container_right_validate}>
          <p>C'est parti</p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
