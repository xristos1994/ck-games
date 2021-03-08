import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import { setPlayerById, removePlayerById } from "@models/tik-tak-boom/actions";
import { players } from "@models/tik-tak-boom/props";
import * as styles from "./styles.module.css";

const _Player = ({ player, setPlayerById, numOfPlayers, removePlayerById }) => {
  const onChangeName = e => {
    setPlayerById({ ...player, name: e.target.value });
  };

  const onBlurName = () => {
    if (player.name.trim() !== player.name) {
      setPlayerById({ ...player, name: player.name.trim() });
    }
  };

  const removePlayer = () => {
    removePlayerById(player.id);
  };

  return (
    <div className={styles.playerContainer}>
      <input
        key="name"
        className={classnames(styles.playerNameInput, "largeText")}
        type="text"
        value={player.name}
        onChange={onChangeName}
        onBlur={onBlurName}
      />
      <Button
        disabled={numOfPlayers === 2}
        onClick={removePlayer}
        className={classnames(
          styles.removePlayerButton,
          "normalText",
          "secondary"
        )}
      >
        Remove
      </Button>
    </div>
  );
};

const Player = connect(
  createStructuredSelector({
    numOfPlayers: state => players(state).length,
  }),
  { setPlayerById: setPlayerById, removePlayerById }
)(_Player);

export { Player };
