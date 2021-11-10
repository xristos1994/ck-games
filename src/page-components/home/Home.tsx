import React, { FC, ReactElement, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { SEO, AvailableGames } from './components';
import { compose } from '@utils/component-utils';
import { restartAllGames } from '@models/website/actions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./Home.module.css');

interface IProps {
  restartAllGames: () => void;
}

export const _Home: FC<IProps> = ({ restartAllGames }): ReactElement => {
  useLayoutEffect(() => {
    restartAllGames();
  }, [restartAllGames]);

  return (
    <div className={styles.pageBody}>
      <SEO />
      <AvailableGames />
    </div>
  );
};

const Home = compose(connect(null, { restartAllGames }))(_Home);

export { Home };
