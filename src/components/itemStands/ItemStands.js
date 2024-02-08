import React, { useEffect, useState } from "react";
import styles from "./ItemStands.module.scss";
import IconWithText from "../iconWithText/IconWithText";

import standService from "../../services/stand.service";

import StandIcon from "../../assets/icons/kiosque.svg";
import CloseIcon from "../../assets/icons/icons8-close.svg";

import { useUserContext, DELETE_USER_STANDS } from "../../contexts/userContext";

const ItemStands = (props) => {
  const { dispatch } = useUserContext();
  const token = localStorage.getItem("token");
  const [standValue, setStandValue] = useState({});

  useEffect(() => {
    standService.getStand(props.stand, token).then((data) => {
      setStandValue(data);
    });
  }, [props.stand]);

  const onDelete = () => {
    standService
      .deleteStand(props.stand, token)
      .then((data) => {
        dispatch({ type: DELETE_USER_STANDS, payload: props.stand });
        //Ajouter la suppression dans newsStands de l'utilisateur
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.item__container}>
      {standValue && (
        <IconWithText
          icon={StandIcon}
          // onClick={AddStand}
          deleteClick={onDelete}
          text={standValue.title}
          color="black"
          closeIcon={CloseIcon}
          key={standValue._id}
        />
      )}
    </div>
  );
};

export default ItemStands;
