import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { startRound, goBack, setMovie } from '@models/pantomime/actions';
import { teamNameThatPlaysNow, canGoBack, availableMovies, movie } from '@models/pantomime/props';
import { IState } from '@models/interfaces';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./styles.module.css');

interface IProps {
  canGoBack: boolean;
  teamNameThatPlaysNow: string | null;
  availableMovies: [string, string];
  movie: string;
  startRound: () => void;
  goBack: () => void;
  setMovie: (movie: string) => void;
  t: ITranslate;
}

const _StartRound: FC<IProps> = ({
  startRound,
  teamNameThatPlaysNow,
  availableMovies,
  movie,
  canGoBack,
  goBack,
  setMovie,
  t
}): ReactElement => {
  return (
    <div className={styles.startRoundContainer}>
      <div className={classnames(styles.playsNow)}>{t('Team, it is your turn', [teamNameThatPlaysNow as string])}</div>
      {availableMovies.map((_movie) => (
        <Button
          key={_movie}
          other={{ disabled: _movie === movie }}
          onClick={() => setMovie(_movie)}
          className={classnames(styles.movieButton, {
            [styles.selectedMovieButton]: _movie === movie,
            [styles.notSelectedMovieButton]: _movie !== movie
          })}
        >
          {_movie}
        </Button>
      ))}
      <Button
        other={{ disabled: availableMovies.indexOf(movie) === -1 }}
        onClick={() => startRound()}
        className={classnames(styles.startRoundButton)}
      >
        {t('CONTINUE')}
      </Button>
      {canGoBack && (
        <Button onClick={() => goBack()} className={classnames(styles.backButton)}>
          {t('BACK')}
        </Button>
      )}
    </div>
  );
};

const StartRound = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        canGoBack: IProps['canGoBack'];
        teamNameThatPlaysNow: IProps['teamNameThatPlaysNow'];
        availableMovies: IProps['availableMovies'];
        movie: IProps['movie'];
      },
      {
        canGoBack: IProps['canGoBack'];
        teamNameThatPlaysNow: IProps['teamNameThatPlaysNow'];
        availableMovies: IProps['availableMovies'];
        movie: IProps['movie'];
      }
    >({
      teamNameThatPlaysNow,
      canGoBack,
      availableMovies,
      movie
    }),
    { startRound, goBack, setMovie }
  ),
  withTranslation
)(_StartRound);

export { StartRound };
