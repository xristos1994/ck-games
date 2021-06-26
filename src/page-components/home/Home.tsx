import React, { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { SEO, AvailableGames } from './components';
import { compose } from '@utils/component-utils';
import { restartAllGames } from '@models/website/actions';
import styles from './styles.module.css';

interface IProps {
  restartAllGames: () => void;
}

const _Home: FC<IProps> = ({ restartAllGames }): ReactElement => {
  useEffect(() => {
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
