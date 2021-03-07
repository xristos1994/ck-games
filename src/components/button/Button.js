import React from "react";
import { classnames } from "@utils/component-utils";
import styles from "./styles.module.css";

const Button = ({ children, onClick, className = "", ...other }) => {
  return (
    <button
      className={classnames(styles.button, className)}
      {...other}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
