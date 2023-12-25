import React from "react";
import styles from "./MainLayout.module.scss";

import MainHeader from "../headers/MainHeader";
import SideBar from "../sideBar/SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout__container}>
      <div className={styles.mainLayout__container_sideBar}>
        <SideBar />
      </div>
      <div className={styles.mainLayout__container_header_content}>
        <header className={styles.mainLayout__container_header}>
          <MainHeader />
        </header>
        <main className={styles.mainLayout__container_content}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
