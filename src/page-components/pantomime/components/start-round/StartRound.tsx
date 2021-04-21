import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import { startRound, goBack } from "@models/pantomime/actions";
import {
  teamNameThatPlaysNow,
  canGoBack,
  movie,
} from "@models/pantomime/props";
import { IState } from "@models/interfaces";
// import { ScoreBoard } from "./../score-board"; // Alias "page-components/pantomime/components";
const styles = require("./styles.module.css");

interface IProps {
  canGoBack: boolean;
  teamNameThatPlaysNow: string;
  movie: string;
  startRound: () => void;
  goBack: () => void;
}

const _StartRound: FC<IProps> = ({
  startRound,
  teamNameThatPlaysNow,
  movie,
  canGoBack,
  goBack,
}): ReactElement => {
  return (
    <div className={styles.startRoundContainer}>
      <div
        className={classnames(styles.playsNow, "extraLargeText", "main-color")}
      >
        {teamNameThatPlaysNow} plays now
      </div>
      {/* <ScoreBoard /> */}
      <div className={classnames(styles.movie, "main-color", "extraLargeText")}>
        {movie}
      </div>
      Add movie Choice between two
      <Button
        onClick={() => startRound()}
        className={classnames(
          styles.startRoundButton,
          "extraLargeText",
          "primary-dark"
        )}
      >
        PROCEED
      </Button>
      {canGoBack && (
        <Button
          onClick={() => goBack()}
          className={classnames(styles.backButton, "largeText", "secondary")}
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
      movie: IProps["movie"];
    },
    {
      canGoBack: IProps["canGoBack"];
      teamNameThatPlaysNow: IProps["teamNameThatPlaysNow"];
      movie: IProps["movie"];
    }
  >({
    teamNameThatPlaysNow,
    canGoBack,
    movie,
  }),
  { startRound, goBack }
)(_StartRound);

export { StartRound };
