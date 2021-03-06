import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import styles from "./styles.module.css";
import { startRound } from "@models/tik-tak-boom/actions";
import { playerNameThatStartsRound } from "@models/tik-tak-boom/props";
import { ScoreBoard } from "./../";

const _StartRound = ({ startRound, playerNameThatStartsRound }) => {
  return (
    <div className={styles.startRoundContainer}>
      <div className={styles.playsFirst}>
        {playerNameThatStartsRound} plays first
      </div>
      <ScoreBoard />
      <Button onClick={() => startRound()} className={styles.startRoundButton}>
        CONTINUE
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
