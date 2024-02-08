import React, { useState, useEffect } from "react";
import styles from "./SideBar.module.scss";

import IconWithText from "../iconWithText/IconWithText";
import CreateStandModal from "../modals/createStandModal/CreateStandModal";
import GridStands from "../gridStands/GridStands";

import searchIcon from "../../assets/icons/icons8-chercher.svg";
import plusIcon from "../../assets/icons/icons8-plus.svg";
import plusIcon2 from "../../assets/icons/icons8-plus2.svg";

import {
  useUserContext,
  SET_USER,
} from "../../contexts/userContext";
import userService from "../../services/user.service";

const SideBar = () => {
  const [isNewStandModal, setIsNewStandModal] = useState(false);
  const [userStands, setUserStands] = useState([])
  const { state, dispatch } = useUserContext();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setUserStands(state.user.newsStands)
  }, [state.user.newsStands]);

  useEffect(() => {
    if (token) {
      userService.getUser(token).then((data) => {
        dispatch({ type: SET_USER, payload: data });
      });
    }
  }, [token]);

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
          <GridStands stands={userStands}/>
        </div>
      </div>
      {isNewStandModal && (
        <div>
          <CreateStandModal setIsNewStandModal={setIsNewStandModal} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
