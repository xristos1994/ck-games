import React from "react";
import { SEO, AvailableGames } from "./components";
import * as styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.pageBody}>
      <SEO />
      <AvailableGames />
    </div>
  );
};

export { Home };
