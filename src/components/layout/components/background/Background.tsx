import React, { FC, ReactElement, useEffect, useState } from "react";
import { classnames } from "@utils/component-utils";

const styles = require("./styles.module.css");

const starClasses: Record<string, string> = {
  smallStar: "smallStar",
  mediumStar: "mediumStar",
  bigStar: "bigStar",
};

const Background: FC = (): ReactElement => {
  const [renderedOnce, setRenderedOnce] = useState(false);

  useEffect(() => {
    setRenderedOnce(true);
  }, [setRenderedOnce]);

  if (!renderedOnce) {
    return <div className={styles.backgroundContainer} />;
  }

  return (
    <div className={styles.backgroundContainer}>
      {Array.from(" ".repeat(window.innerWidth / 10)).map((item, index) => {
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
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export { Background };
