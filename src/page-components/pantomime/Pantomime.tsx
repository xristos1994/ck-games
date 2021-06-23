import React, { FC, ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  SEO,
  TeamsSetup,
  ScoreSetup,
  AvailableTimeSetup,
  StartRound,
  RoundInProgress,
  EndRound,
  EndGame,
} from "./components";
import { gameState } from "@models/pantomime/props";
import { initializeGame } from "@models/pantomime/actions";
import { GameStates } from "@models/pantomime/config";
import { IState } from "@models/interfaces";
import styles from "./styles.module.css";

interface IProps {
  gameState: GameStates;
  initializeGame: () => void;
}

const _Pantomime: FC<IProps> = ({
  gameState,
  initializeGame,
}): ReactElement => {
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const playerSetup = gameState === GameStates.setTeams && <TeamsSetup />;

  const scoreSetup = gameState === GameStates.setScoreTarget && <ScoreSetup />;

  const availableTimeSetup = gameState === GameStates.setAvailableTime && (
    <AvailableTimeSetup />
  );

  const startRound = gameState === GameStates.waitForRoundStart && (
    <StartRound />
  );

  const roundInProgress = gameState === GameStates.roundInProgress && (
    <RoundInProgress />
  );

  const endGame = gameState === GameStates.gameEnded && <EndGame />;

  const endRound = gameState === GameStates.roundEnded && <EndRound />;

  return (
    <div className={styles.pageBody}>
      <SEO />
      {playerSetup}
      {scoreSetup}
      {availableTimeSetup}
      {startRound}
      {roundInProgress}
      {endRound}
      {endGame}
    </div>
  );
};

const Pantomime = connect(
  createStructuredSelector<
    IState,
    { gameState: IProps["gameState"] },
    { gameState: IProps["gameState"] }
  >({
    gameState,
  }),
  { initializeGame }
)(_Pantomime);

export { Pantomime };
