import React, { FC, ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./Background.module.css');

const Background: FC = (): ReactElement => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </div>
  );
};

export { Background };
