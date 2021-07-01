import React, { FC, ReactElement, ReactChild } from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./styles.module.css');

interface IProps {
  children: ReactChild | ReactChild[];
}

const ElevatedWithBlurBackGround: FC<IProps> = ({ children }): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};

export { ElevatedWithBlurBackGround };
