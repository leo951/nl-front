import React, { useState } from "react";
import styles from "./SideBar.module.scss";

import IconWithText from "../iconWithText/IconWithText";
import CreateStandModal from "../modals/createStandModal/CreateStandModal";

import searchIcon from "../../assets/icons/icons8-chercher.svg";
import plusIcon from "../../assets/icons/icons8-plus.svg";
import plusIcon2 from "../../assets/icons/icons8-plus2.svg";

const SideBar = () => {
  const [isNewStandModal, setIsNewStandModal] = useState(false);

  const AddStand = () => {
    setIsNewStandModal(!isNewStandModal);
  };

  return (
    <div className={styles.sideBar__container}>
      <div className={styles.sideBar__container_head}>
        <div className={styles.sideBar__container_head_title}>
          <h1>Notion-Like</h1>
        </div>
        <div className={styles.sideBar__container_head_line}>
          <IconWithText icon={searchIcon} text="Rechercher" color="black" />
          <IconWithText
            icon={plusIcon}
            onClick={AddStand}
            text="Nouveau kiosque"
            color="black"
          />
        </div>
      </div>
      <div className={styles.sideBar__container_body}>
        <div className={styles.sideBar__container_body_newsStands}>
          <IconWithText
            icon={plusIcon2}
            onClick={AddStand}
            text="Ajouter kiosque"
            color="grey"
          />
        </div>
      </div>
      {isNewStandModal && (
        <div>
          <CreateStandModal /> <div className={styles.overlay}></div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
