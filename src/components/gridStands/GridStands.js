import React, { useEffect } from "react";
import styles from "./GridStands.module.scss";

import ItemStands from "../itemStands/ItemStands";

const GridStands = (props) => {

  return (
    <div className={styles.gridStand__container}>
      {props.stands?.map((stand, index) => (
        <ItemStands key={index} stand={stand} />
      ))}
    </div>
  );
};

export default GridStands;
