import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from '@components';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { goToNextRound, setIfMovieFound } from '@models/pantomime/actions';
import { teams } from '@models/pantomime/props';
import { IState } from '@models/interfaces';
import { ScoreBoard } from '../score-board';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./EndRound.module.css');

interface ITeam {
  id: number;
  score: number;
  name: string;
  playsNow: boolean | null;
  movieFound: boolean | null;
}

interface IProps {
  teams: ITeam[];
  goToNextRound: () => void;
  setIfMovieFound: (arg0: boolean) => void;
  t: ITranslate;
}

export const _EndRound: FC<IProps> = ({ teams, goToNextRound, setIfMovieFound, t }): ReactElement => {
  const teamNow = teams.find((team) => team.playsNow) as ITeam;

  return (
    <div className={styles.endRoundContainer}>
      <div className={classnames(styles.title)}>{t('Team, your turn completed', [teamNow.name])}</div>
      <ScoreBoard />
      <div className={styles.movieFoundButtons}>
        <Button
          key="movieFound"
          other={{ disabled: teamNow.movieFound }}
          className={classnames({
            [styles.movieActionSelected]: teamNow.movieFound,
            [styles.movieActionNotSelected]: !teamNow.movieFound
          })}
          onClick={() => setIfMovieFound(true)}
        >
          {t('Movie Found')}
        </Button>
        <Button
          key="movieNotFound"
          other={{ disabled: !teamNow.movieFound }}
          className={classnames({
            [styles.movieActionSelected]: !teamNow.movieFound,
            [styles.movieActionNotSelected]: teamNow.movieFound
          })}
          onClick={() => setIfMovieFound(false)}
        >
          {t('Movie Not Found')}
        </Button>
      </div>
      <Button onClick={goToNextRound} className={classnames(styles.proceedButton)}>
        {t('CONTINUE')}
      </Button>
    </div>
  );
};

const EndRound = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        teams: IProps['teams'];
      },
      {
        teams: IProps['teams'];
      }
    >({
      teams
    }),
    { goToNextRound, setIfMovieFound }
  ),
  withTranslation
)(_EndRound);

export { EndRound };
