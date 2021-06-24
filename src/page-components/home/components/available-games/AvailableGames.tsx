import React, { FC, ReactElement } from 'react';
import { Link } from 'gatsby';
import { compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { availableGames } from './config';
import styles from './styles.module.css';

interface IProps {
  t: ITranslate;
}

const _AvailableGames: FC<IProps> = ({ t }): ReactElement => {
  const games = availableGames.map(({ url, name }) => (
    <Link to={url} key={name}>
      <Button className={styles.gameButton}>{t(name)}</Button>
    </Link>
  ));

  return <div className={styles.availableGamesContainer}>{games}</div>;
};

const AvailableGames = compose(withTranslation)(_AvailableGames);

export { AvailableGames };
