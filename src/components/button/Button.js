import React from "react";
import { classnames } from "@utils/component-utils";
import "./styles.module.css";

const Button = ({ children, onClick, className = "", ...other }) => {
  return (
    <button className={classnames(className)} {...other} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
