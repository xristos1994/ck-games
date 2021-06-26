import React, { FC, ReactElement } from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { restartGame } from '@models/pantomime/actions';
import { ScoreBoard } from './../score-board'; // Alias "page-components/pantomime/components";
import styles from './styles.module.css';

interface IProps {
  restartGame: () => void;
  t: ITranslate;
}

const _EndGame: FC<IProps> = ({ restartGame, t }): ReactElement => {
  return (
    <div className={styles.endGameContainer}>
      <div className={classnames(styles.gameEndTitle)}>{t('Game Completed')}</div>
      <ScoreBoard />
      <Button onClick={() => restartGame()} className={classnames(styles.restartButton)}>
        {t('Restart Game')}
      </Button>
      <Link to={'/'}>
        <Button className={classnames(styles.homeButton)}>{t('Home')}</Button>
      </Link>
    </div>
  );
};

const EndGame = compose(connect(null, { restartGame }), withTranslation)(_EndGame);

export { EndGame };
