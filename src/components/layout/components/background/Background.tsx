import React, { FC, ReactElement } from "react";
import { classnames } from "@utils/component-utils";

const styles = require("./styles.module.css");

const starClasses: Record<string, string> = {
  smallStar: "smallStar",
  mediumStar: "mediumStar",
  bigStar: "bigStar",
};

const Background: FC = (): ReactElement => {
  if (typeof screen === "undefined") {
    return null;
  }

  return (
    <div className={styles.backgroundContainer}>
      {Array.from(" ".repeat(screen.width / 10)).map((item, index) => {
        const randomNumber = Math.random();
        const starClass =
          randomNumber < 0.1
            ? starClasses.bigStar
            : randomNumber < 0.3
            ? starClasses.mediumStar
            : starClasses.smallStar;

        return (
          <div
            key={index}
            className={classnames(styles.star, styles[starClass])}
            style={{
              left: Math.random() * screen.width,
              top: Math.random() * screen.height,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export { Background };
