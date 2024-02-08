import React, { useEffect, useState } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/home/Home";
import LoginModal from "./components/modals/loginModal/LoginModal";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./contexts/userContext";

function App() {
  const [token, setToken] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    !token ? setIsOpenModal(true) : setIsOpenModal(false);
  }, [token]);

  return (
    <UserProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <MainLayout>
          <Home />
          {isOpenModal && <LoginModal setIsOpenModal={setIsOpenModal} />}
        </MainLayout>
      </GoogleOAuthProvider>
    </UserProvider>
  );
}

export default App;
