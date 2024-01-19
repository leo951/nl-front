import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.scss";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/home/Home";
import LoginModal from "./components/modals/LoginModal";
import ContextProvider from "./contexts/contextProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [token, setToken] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, []);

  useEffect(() => {
    !token ? setIsOpenModal(true) : setIsOpenModal(false);
  }, [token]);

  return (
    <ContextProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <MainLayout>
          <Home />
          {isOpenModal && (
            <LoginModal
              setIsOpenModal={setIsOpenModal}
            />
          )}
          {isOpenModal && <div className={styles.overlay}></div>}
        </MainLayout>
      </GoogleOAuthProvider>
    </ContextProvider>
  );
}

export default App;
