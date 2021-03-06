import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import {
  mode,
  syllable,
  playerNameThatPlaysNow,
  remainingTime,
} from "@models/tik-tak-boom/props";
import styles from "./styles.module.css";
import {
  goToNextPlayer,
  goToPreviousPlayer,
} from "@models/tik-tak-boom/actions";

const _RoundInProgress = ({
  goToNextPlayer,
  goToPreviousPlayer,
  mode,
  syllable,
  playerNameThatPlaysNow,
  remainingTime,
}) => {
  return (
    <div className={styles.roundInProgressContainer}>
      <p>{remainingTime}</p>
      <div className={styles.player}>{playerNameThatPlaysNow}</div>
      <div className={styles.mode}>{mode.name}</div>
      <div className={styles.modeDescription}>{mode.description}</div>
      <div className={styles.syllable}>{syllable}</div>
      <div className={styles.goToPlayerButtonContainer}>
        <Button
          onClick={() => goToPreviousPlayer()}
          className={styles.goToPlayerButton}
        >
          Previous
        </Button>
        <Button
          onClick={() => goToNextPlayer()}
          className={styles.goToPlayerButton}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
};

const RoundInProgress = connect(
  createStructuredSelector({
    mode,
    syllable,
    playerNameThatPlaysNow,
    remainingTime,
  }),
  { goToNextPlayer, goToPreviousPlayer }
)(_RoundInProgress);

export { RoundInProgress };
