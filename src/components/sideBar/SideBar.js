import React from "react";
import styles from "./SideBar.module.scss";

import IconWithText from "../iconWithText/IconWithText";

import searchIcon from "../../assets/icons/icons8-chercher.svg";
import plusIcon from "../../assets/icons/icons8-plus.svg"

const SideBar = () => {
  return (
    <div className={styles.sideBar__container}>
      <div className={styles.sideBar__container_head}>
        <div className={styles.sideBar__container_head_title}>
          <h1>Notion-Like</h1>
        </div>
        <div className={styles.sideBar__container_head_line}>
          <IconWithText icon={searchIcon} text="Rechercher" />
          <IconWithText icon={plusIcon} text="Nouveau kiosque" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
