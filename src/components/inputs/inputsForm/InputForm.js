import React from "react";

import styles from "./InputForm.module.scss";

const InputForm = (props) => {
  return (
    <div className={styles.container__input}>
      <input
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputForm;
