import React from "react";
import styles from "./MainLayout.module.scss";

import MainHeader from "../headers/MainHeader";
import SideBar from "../sideBar/SideBar";

const MainLayout = ({ children }, props) => {
  return (
    <div>
      <header className={styles.mainLayout__container_header}>
        <SideBar />
        <MainHeader />
      </header>
      <main>{/* {children} */}</main>
    </div>
  );
};

export default MainLayout;
