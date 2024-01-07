import React, { useState, useEffect } from "react";
import styles from "./LoginModal.module.scss";
import { GoogleLogin } from "@react-oauth/google";

const ImageLeft = require("../../assets/images/northern-lights.jpg");

const LoginModal = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Je suis token = ', token.access_token);
    if (token) {
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo`, {
        headers: {
          Authorization: `Bearer ${token.credential}`,
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .catch((err) => console.error("Error fetching user info:", err));
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      console.log("Je suis USER =", user);
    }
  }, [user]);

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
              onSuccess={(token) => {
                setToken(token);
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
