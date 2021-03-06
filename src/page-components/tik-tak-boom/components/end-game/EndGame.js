import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { Button } from "@components";
import styles from "./styles.module.css";
import { restartGame } from "@models/tik-tak-boom/actions";
import { ScoreBoard } from "./../";

const _EndGame = ({ restartGame }) => {
  return (
    <div className={styles.endGameContainer}>
      <div className={styles.gameEndTitle}>Game Completed</div>
      <ScoreBoard />
      <Button onClick={() => restartGame()} className={styles.restartButton}>
        Restart Game
      </Button>
      <Link to={"/"}>
        <Button className={styles.homeButton}>Home</Button>
      </Link>
    </div>
  );
};

const EndGame = connect(null, { restartGame })(_EndGame);

export { EndGame };
