import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import { Button } from "@components";

const availableGames = [
  { name: "tik tak boom", url: "/tik-tak-boom" },
  { name: "tik tak boom1", url: "/tic-tak-boom" },
  { name: "tik tak boom2", url: "/tic-tak-boom" },
  { name: "tik tak boom3", url: "/tic-tak-boom" },
];

const AvailableGames = () => {
  const games = availableGames.map(({ url, name }) => (
    <Link to={url} key={name}>
      <Button className={styles.gameButton}>{name}</Button>
    </Link>
  ));

  return <div className={styles.availableGamesContainer}>{games}</div>;
};

export { AvailableGames };
