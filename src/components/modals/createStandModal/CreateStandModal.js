import React from "react";
import styles from "./CreateStandModal.module.scss";

const CreateStandModal = (props) => {
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
            <input type="text" />
          </div>
        </div>
        <div className={styles.stand__container_bottom}>
          <div className={styles.stand__container_bottom_button1}>
            <p>Fermer</p>
          </div>
          <div className={styles.stand__container_bottom_button2}>
            <p>Valider</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default CreateStandModal;
