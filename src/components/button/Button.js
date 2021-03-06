import React from "react";
import styles from "./styles.module.css";

const Button = ({ children, onClick, className = "", ...other }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...other}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
