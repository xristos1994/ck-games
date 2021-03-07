import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { ElevatedWithBlurBackGround, Button } from "@components";
import { players, isPlayersSetupValid } from "@models/tik-tak-boom/props";
import { Player } from "./components";
import * as styles from "./styles.module.css";
import { addPlayer, playersSetupSubmit } from "@models/tik-tak-boom/actions";

const _PlayersSetup = ({
  players,
  playersSetupSubmit,
  addPlayer,
  isPlayersSetupValid,
}) => {
  return (
    <ElevatedWithBlurBackGround>
      <div
        className={classnames(styles.playersSetupContainer, "main-bg-color")}
      >
        <div
          className={classnames(
            styles.playersSetupTitle,
            "extraLargeText",
            "main-color"
          )}
        >
          Players's Setup
        </div>
        <div className={styles.playersContainer}>
          {players.map(player => (
            <Player key={player.id} player={player} />
          ))}
        </div>
        <Button
          onClick={addPlayer}
          className={classnames(styles.addPlayerButton, "largeText", "primary")}
        >
          Add Player
        </Button>

        <Button
          disabled={!isPlayersSetupValid}
          onClick={() => playersSetupSubmit()}
          className={classnames(
            styles.playersSetupSubmitButton,
            "extraLargeText",
            "primary-dark"
          )}
        >
          PROCEED
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
