import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import { startRound, goBack, setMovie } from "@models/pantomime/actions";
import {
  teamNameThatPlaysNow,
  canGoBack,
  availableMovies,
  movie,
} from "@models/pantomime/props";
import { IState } from "@models/interfaces";

const styles = require("./styles.module.css");

interface IProps {
  canGoBack: boolean;
  teamNameThatPlaysNow: string;
  availableMovies: [string, string];
  movie: string;
  startRound: () => void;
  goBack: () => void;
  setMovie: (movie: string) => void;
}

const _StartRound: FC<IProps> = ({
  startRound,
  teamNameThatPlaysNow,
  availableMovies,
  movie,
  canGoBack,
  goBack,
  setMovie,
}): ReactElement => {
  return (
    <div className={styles.startRoundContainer}>
      <div className={classnames(styles.playsNow)}>
        {teamNameThatPlaysNow} plays now
      </div>
      {availableMovies.map(_movie => (
        <Button
          key={_movie}
          other={{ disabled: _movie === movie }}
          onClick={() => setMovie(_movie)}
          className={classnames(styles.movieButton, {
            [styles.selectedMovieButton]: _movie === movie,
            [styles.notSelectedMovieButton]: _movie !== movie,
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
        PROCEED
      </Button>
      {canGoBack && (
        <Button
          onClick={() => goBack()}
          className={classnames(styles.backButton)}
        >
          BACK
        </Button>
      )}
    </div>
  );
};

const StartRound = connect(
  createStructuredSelector<
    IState,
    {
      canGoBack: IProps["canGoBack"];
      teamNameThatPlaysNow: IProps["teamNameThatPlaysNow"];
      availableMovies: IProps["availableMovies"];
      movie: IProps["movie"];
    },
    {
      canGoBack: IProps["canGoBack"];
      teamNameThatPlaysNow: IProps["teamNameThatPlaysNow"];
      availableMovies: IProps["availableMovies"];
      movie: IProps["movie"];
    }
  >({
    teamNameThatPlaysNow,
    canGoBack,
    availableMovies,
    movie,
  }),
  { startRound, goBack, setMovie }
)(_StartRound);

export { StartRound };
