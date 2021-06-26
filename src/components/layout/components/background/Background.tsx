import React, { FC, ReactElement, useEffect, useState } from 'react';
import { classnames } from '@utils/component-utils';

import styles from './styles.module.css';

const starClasses: Record<string, string> = {
  smallStar: 'smallStar',
  mediumStar: 'mediumStar',
  bigStar: 'bigStar'
};

const Background: FC = (): ReactElement => {
  const [renderedOnce, setRenderedOnce] = useState(false);

  useEffect(() => {
    setRenderedOnce(true);
  }, [setRenderedOnce]);

  const width = typeof window !== 'undefined' && renderedOnce ? window.innerWidth : 1024;
  const height = typeof window !== 'undefined' && renderedOnce ? window.innerHeight : 1500;

  return (
    <div className={styles.backgroundContainer}>
      {Array.from(' '.repeat(width / 10)).map((item, index) => {
        const randomNumber = Math.random();
        const starClass
          = randomNumber < 0.1
            ? starClasses.bigStar
            : randomNumber < 0.3
              ? starClasses.mediumStar
              : starClasses.smallStar;

        return (
          <div
            key={index}
            className={classnames(styles.star, styles[starClass])}
            style={{
              left: Math.random() * width,
              top: Math.random() * height
            }}
          ></div>
        );
      })}
    </div>
  );
};

export { Background };
