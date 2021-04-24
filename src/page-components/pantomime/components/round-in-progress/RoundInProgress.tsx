import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import { movie, teamNameThatPlaysNow } from "@models/pantomime/props";
import { clockRemainingTime } from "@models/clock/props";
import { setIfMovieFound } from "@models/pantomime/actions";
import { IState } from "@models/interfaces";

const styles = require("./styles.module.css");

interface IProps {
  setIfMovieFound: (boolean) => void;
  movie: string;
  clockRemainingTime: number;
  teamNameThatPlaysNow: string;
}

const _RoundInProgress: FC<IProps> = ({
  setIfMovieFound,
  movie,
  clockRemainingTime,
  teamNameThatPlaysNow,
}): ReactElement => {
  return (
    <div className={styles.roundInProgressContainer}>
      <div className={classnames(styles.team, "main-color", "largeText")}>
        {teamNameThatPlaysNow} is playing now
      </div>
      <div className={classnames(styles.movie, "main-color", "extraLargeText")}>
        {movie}
      </div>
      <div
        className={classnames(
          styles.remainingTime,
          "main-color",
          "extraLargeText"
        )}
      >
        {clockRemainingTime}
      </div>
      <Button
        onClick={() => setIfMovieFound(true)}
        className={classnames(
          styles.movieFoundButton,
          "primary",
          "extraLargeText"
        )}
      >
        Movie Found
      </Button>
      <Button
        onClick={() => setIfMovieFound(false)}
        className={classnames(
          styles.movieNotFoundButton,
          "secondary",
          "largeText"
        )}
      >
        Movie Not Found
      </Button>
    </div>
  );
};

const RoundInProgress = connect(
  createStructuredSelector<
    IState,
    {
      movie: IProps["movie"];
      teamNameThatPlaysNow: IProps["teamNameThatPlaysNow"];
      clockRemainingTime: IProps["clockRemainingTime"];
    },
    {
      movie: IProps["movie"];
      teamNameThatPlaysNow: IProps["teamNameThatPlaysNow"];
      clockRemainingTime: IProps["clockRemainingTime"];
    }
  >({
    movie,
    teamNameThatPlaysNow,
    clockRemainingTime,
  }),
  { setIfMovieFound }
)(_RoundInProgress);

export { RoundInProgress };