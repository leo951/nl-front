import React from "react";
import styles from "./Home.module.scss";

import plusBlackIcon from "../../assets/icons/icons8-plus2.svg";
import plusWhiteIcon from "../../assets/icons/icons8-plus.svg";

const Home = () => {
  return (
    <div className={styles.home__container}>
      <div className={styles.home__container_body}>
        <div className={styles.home__container_title}>
          <h2>Instructions</h2>
        </div>
        <div className={styles.home__container_steps_title}>
          <p>1. Cliquez sur ajoutez un kiosque ou nouveau kiosque</p>
          <br />
          <div className={styles.home__container_steps_content}>
            <img src={plusBlackIcon} alt="more" /> <p>Nouveau kiosque |</p>{" "}
            <span>Ajoutez kiosque</span>
          </div>
        </div>
        <div className={styles.home__container_steps_title}>
          <p>2. Ensuite créez votre premier livre en cliquant sur :</p>
          <br />
          <div className={styles.home__container_steps_content}>
            <img src={plusWhiteIcon} alt="more" /> <p>Nouveau livre</p>
          </div>
        </div>
        <div className={styles.home__container_title}>
          <h3>C'est maintenant entre vos mains.</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
