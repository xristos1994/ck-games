import React from "react";
import { Link } from "gatsby";
import { GiHamburgerMenu } from "react-icons/gi";
import { classnames } from "@utils/component-utils";
import { useScrollDirection } from "@hooks";
import { Button } from "@components";
import styles from "./styles.module.css";

const HeightClasses = {
  normal: "normal",
  shrinked: "shrinked",
};

const Header = () => {
  const scrollDirection = useScrollDirection({
    initialDirection: useScrollDirection.ScrollDirections.up,
    thresholdPixels: 40,
  });

  const heightClass =
    scrollDirection === useScrollDirection.ScrollDirections.up
      ? HeightClasses.normal
      : HeightClasses.shrinked;

  return (
    <header className={classnames(styles.header, styles[heightClass])}>
      <Link to="/" className={styles.title}>
        My Games
      </Link>
      <Button className={styles.menuButton}>
        <GiHamburgerMenu />
      </Button>
    </header>
  );
};

export { Header };
