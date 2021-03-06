import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  SEO,
  PlayersSetup,
  ScoreSetup,
  StartRound,
  RoundInProgress,
  EndRound,
  EndGame,
} from "./components";
import styles from "./styles.module.css";
import { gameState } from "@models/tik-tak-boom/props";
import { initializeGame } from "@models/tik-tak-boom/actions";
import { GameStates } from "@models/tik-tak-boom/config";

const _TikTakBoom = ({ gameState, initializeGame }) => {
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const playerSetup = (gameState === GameStates.setPlayers ||
    gameState === GameStates.setPlayersWhileInProgress) && <PlayersSetup />;

  const scoreSetup = gameState === GameStates.setScoreTarget && <ScoreSetup />;

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
      {startRound}
      {roundInProgress}
      {endRound}
      {endGame}
    </div>
  );
};

const TikTakBoom = connect(
  createStructuredSelector({
    gameState,
  }),
  { initializeGame }
)(_TikTakBoom);

export { TikTakBoom };
