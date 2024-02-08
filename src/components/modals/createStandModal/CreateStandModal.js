import React, { useState } from "react";
import styles from "./CreateStandModal.module.scss";

import standService from "../../../services/stand.service";
import userService from "../../../services/user.service";

import {
  useUserContext,
  UPDATE_USER_STANDS,
} from "../../../contexts/userContext";

const CreateStandModal = (props) => {
  const { dispatch } = useUserContext();
  const [standVal, setStandVal] = useState("");
  const token = localStorage.getItem("token");

  const validateStand = async () => {
    if (standVal) {
      try {
        const dataStand = await standService.addStand(standVal, token);
        dispatch({ type: UPDATE_USER_STANDS, payload: dataStand.data._id });
        const valToUpdate = { newsStands: dataStand.data._id };
        const dataUser = await userService.updateUser(valToUpdate, token);

        dataUser && props.setIsNewStandModal();
      } catch (err) {
        console.log("Je suis err = ", err);
      }
    }
  };

  return (
    <div>
      <div
        onClick={() => props.setIsNewStandModal()}
        className={styles.overlay}
      ></div>
      <div className={styles.stand__container}>
        <div className={styles.stand__container_title}>
          <div className={styles.stand__container_title__main}>
            <h3>Création d’un nouveau kiosque</h3>
          </div>
          <div className={styles.stand__container_title__second}>
            <p>
              Ce nouveau kiosque vous permettra de ranger vos futurs livres.
            </p>
          </div>
        </div>
        <div className={styles.stand__container_body}>
          <div className={styles.stand__container_body_title}>
            <p>Kiosque</p>
          </div>
          <div className={styles.stand__container_body_input}>
            <input onChange={(e) => setStandVal(e.target.value)} type="text" />
          </div>
        </div>
        <div className={styles.stand__container_bottom}>
          <div className={styles.stand__container_bottom_button1}>
            <p onClick={() => props.setIsNewStandModal(false)}>Fermer</p>
          </div>
          <div
            onClick={() => validateStand()}
            className={styles.stand__container_bottom_button2}
          >
            <p>Valider</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default CreateStandModal;
