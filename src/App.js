import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.scss";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/home/Home";
import LoginModal from "./components/modals/LoginModal";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [token, setToken] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    !token && setIsOpenModal(true);
  }, [token]);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <MainLayout>
        <Home />
        {isOpenModal && <LoginModal closeModal={closeModal} />}
        {isOpenModal && <div className={styles.overlay}></div>}
      </MainLayout>
    </GoogleOAuthProvider>
  );
}

export default App;
