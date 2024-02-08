import React, { useEffect } from "react";
// import styles from './GridStands.module.scss'

const GridStands = (props) => {
  useEffect(() => {
    console.log("Je suis props.stands = ", props.stands);
  }, [props.stands]);

  return <div></div>;
};

export default GridStands;
