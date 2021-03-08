import React from "react";
import * as styles from "./styles.module.css";

const ElevatedWithBlurBackGround = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export { ElevatedWithBlurBackGround };
