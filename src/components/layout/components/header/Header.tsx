import React, { FC, ReactElement } from "react";
import { Link } from "gatsby";
import { classnames } from "@utils/component-utils";
import { useScrollDirection } from "@hooks";
const styles = require("./styles.module.css");

enum HeightClasses {
  normal = "normal",
  shrinked = "shrinked",
}

const Header: FC = (): ReactElement => {
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
      className={classnames(styles.header, styles[heightClass], "primary")}
    >
      <Link to="/" className={classnames("extraLargeText")}>
        CK-Games
      </Link>
    </header>
  );
};

export { Header };
