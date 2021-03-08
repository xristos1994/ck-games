import React from "react";
import { SEO } from "./components";
import * as styles from "./styles.module.css";

const [%Page%] = () => {
  return (
    <div className={styles.pageBody}>
      <SEO />
    </div>
  );
};

export { [%Page%] };
