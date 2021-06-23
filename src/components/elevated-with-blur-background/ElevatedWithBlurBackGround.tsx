import React, { FC, ReactElement, ReactChild } from "react";
import styles from "./styles.module.css";

interface IProps {
  children: ReactChild | ReactChild[];
}

const ElevatedWithBlurBackGround: FC<IProps> = ({ children }): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};

export { ElevatedWithBlurBackGround };
