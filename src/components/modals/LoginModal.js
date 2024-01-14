import React, { useState, useEffect } from "react";
import styles from "./LoginModal.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

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

  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__container_left}>
        <img src={ImageLeft} alt="northern-lights" />
      </div>
      <div className={styles.modal__container_right}>
        <div className={styles.modal__container_right_title}>
          <h2>Inscrivez-vous pour débuter</h2>
        </div>
        <div>
          <div>
            <GoogleLogin
              onSuccess={(data) => {
                setToken(jwtDecode(data.credential));
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
