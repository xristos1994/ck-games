import React from "react";
import { Link } from "gatsby";
import { classnames } from "@utils/component-utils";
import { useScrollDirection } from "@hooks";
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
    <header
      className={classnames(styles.header, styles[heightClass], "primary-dark")}
    >
      <Link to="/" className={classnames(styles.title, "extraLargeText")}>
        My Games
      </Link>
    </header>
  );
};

export { Header };
