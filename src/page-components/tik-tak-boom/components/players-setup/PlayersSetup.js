import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ElevatedWithBlurBackGround, Button } from "@components";
import { players, isPlayersSetupValid } from "@models/tik-tak-boom/props";
import { Player } from "./components";
import styles from "./styles.module.css";
import { addPlayer, playersSetupSubmit } from "@models/tik-tak-boom/actions";

const _PlayersSetup = ({
  players,
  playersSetupSubmit,
  addPlayer,
  isPlayersSetupValid,
}) => {
  return (
    <ElevatedWithBlurBackGround>
      <div className={styles.playersSetUpContainer}>
        <div className={styles.playersContainer}>
          {players.map(player => (
            <Player key={player.id} player={player} />
          ))}
        </div>
        <Button onClick={addPlayer} className={styles.addPlayerButton}>
          Add Player
        </Button>

        <Button
          disabled={!isPlayersSetupValid}
          onClick={() => playersSetupSubmit()}
          className={styles.playersSetupSubmitButton}
        >
          OK
        </Button>
      </div>
    </ElevatedWithBlurBackGround>
  );
};

const PlayersSetup = connect(
  createStructuredSelector({
    players,
    isPlayersSetupValid,
  }),
  { playersSetupSubmit, addPlayer }
)(_PlayersSetup);

export { PlayersSetup };
