import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import styles from "./styles.module.css";
import { startRound } from "@models/tik-tak-boom/actions";
import { playerNameThatStartsRound } from "@models/tik-tak-boom/props";
import { ScoreBoard } from "./../";

const _StartRound = ({ startRound, playerNameThatStartsRound }) => {
  return (
    <div className={styles.startRoundContainer}>
      <div
        className={classnames(
          styles.playsFirst,
          "extraLargeText",
          "main-color"
        )}
      >
        {playerNameThatStartsRound} plays first
      </div>
      <ScoreBoard />
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
    </div>
  );
};

const StartRound = connect(
  createStructuredSelector({
    playerNameThatStartsRound,
  }),
  { startRound }
)(_StartRound);

export { StartRound };
