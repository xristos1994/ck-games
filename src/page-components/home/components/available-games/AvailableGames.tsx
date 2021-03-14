import React, { FC, ReactElement } from "react";
import { Link } from "gatsby";
import { classnames } from "./../../../../utils/component-utils"; // Alias "@utils/component-utils";
import { Button } from "./../../../../components"; // Alias "@components";
import { availableGames } from "./config";
const styles = require("./styles.module.css");

const AvailableGames: FC = (): ReactElement => {
  const games = availableGames.map(({ url, name }) => (
    <Link to={url} key={name}>
      <Button
        className={classnames(styles.gameButton, "primary", "extraLargeText")}
      >
        {name}
      </Button>
    </Link>
  ));

  return <div className={styles.availableGamesContainer}>{games}</div>;
};

export { AvailableGames };
