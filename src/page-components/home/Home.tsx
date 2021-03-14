import React, { FC, ReactElement } from "react";
import { SEO, AvailableGames } from "./components";
const styles = require("./styles.module.css");

const Home: FC = (): ReactElement => {
  return (
    <div className={styles.pageBody}>
      <SEO />
      <AvailableGames />
    </div>
  );
};

export { Home };
