import React from "react";
import { Link } from "gatsby";
import { classnames } from "@utils/component-utils";
import * as styles from "./styles.module.css";
import { Button } from "@components";

const availableGames = [{ name: "tik tak boom", url: "/tik-tak-boom" }];

const AvailableGames = () => {
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
