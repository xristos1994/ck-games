import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import { classnames } from "@utils/component-utils";
import styles from "./styles.module.css";
import { goToNextRound, setWhoLost } from "@models/tik-tak-boom/actions";
import { players } from "@models/tik-tak-boom/props";

const _EndRound = ({ players, goToNextRound, setWhoLost }) => {
  const playerNow = players.find(player => player.playsNow);

  return (
    <div className={styles.endRoundContainer}>
      <div className={styles.whoLost}>
        Bomb boomed on {playerNow.name}'
        {playerNow.name.slice(-1).toLowerCase() === "s" ? "" : "s"} hands
      </div>
      <div className={styles.playersContainer}>
        {players.map(player => (
          <Button
            key={player.id}
            disabled={!player.isActive}
            className={classnames(styles.player, {
              [styles.playerLost]: playerNow.id === player.id,
            })}
            onClick={() => player.isActive && setWhoLost(player.id)}
          >
            {player.name}
          </Button>
        ))}
      </div>
      <Button onClick={() => goToNextRound()} className={styles.proceedButton}>
        PROCEED
      </Button>
    </div>
  );
};

const EndRound = connect(
  createStructuredSelector({
    players,
  }),
  { goToNextRound, setWhoLost }
)(_EndRound);

export { EndRound };
