import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import { classnames } from "@utils/component-utils";
import { goToNextRound, setIfMovieFound } from "@models/pantomime/actions";
import { teams } from "@models/pantomime/props";
import { IState } from "@models/interfaces";
import { ScoreBoard } from "../score-board";
const styles = require("./styles.module.css");

interface IProps {
  teams: {
    id: number;
    score: number;
    name: string;
    playsNow: boolean | null;
    movieFound: boolean;
  }[];
  goToNextRound: () => void;
  setIfMovieFound: (boolean) => void;
}

const _EndRound: FC<IProps> = ({
  teams,
  goToNextRound,
  setIfMovieFound,
}): ReactElement => {
  const teamNow = teams.find(team => team.playsNow);

  return (
    <div className={styles.endRoundContainer}>
      <div className={classnames(styles.title, "extraLargeText")}>
        Turn of {teamNow.name} ended
      </div>
      <ScoreBoard />
      <div className={styles.movieFoundButtons}>
        <Button
          key="movieFound"
          other={{ disabled: teamNow.movieFound }}
          className={classnames("largeText", {
            [styles.movieActionSelected]: teamNow.movieFound,
            [styles.movieNotFoundSelected]: !teamNow.movieFound,
          })}
          onClick={() => setIfMovieFound(true)}
        >
          Movie Found
        </Button>
        <Button
          key="movieNotFound"
          other={{ disabled: !teamNow.movieFound }}
          className={classnames(styles.player, "largeText", {
            [styles.movieActionSelected]: !teamNow.movieFound,
            [styles.movieFoundNotSelected]: teamNow.movieFound,
          })}
          onClick={() => setIfMovieFound(false)}
        >
          Movie Not Found
        </Button>
      </div>
      <Button
        onClick={() => goToNextRound()}
        className={classnames(styles.proceedButton, "extraLargeText")}
      >
        PROCEED
      </Button>
    </div>
  );
};

const EndRound = connect(
  createStructuredSelector<
    IState,
    {
      teams: IProps["teams"];
    },
    {
      teams: IProps["teams"];
    }
  >({
    teams,
  }),
  { goToNextRound, setIfMovieFound }
)(_EndRound);

export { EndRound };
