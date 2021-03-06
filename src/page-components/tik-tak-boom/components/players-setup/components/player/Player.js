import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import { setPlayerById, removePlayerById } from "@models/tik-tak-boom/actions";
import { gameState } from "@models/tik-tak-boom/props";
import styles from "./styles.module.css";

const _Player = ({ player, setPlayerById, gameState, removePlayerById }) => {
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
        className={styles.playerNameInput}
        type="text"
        value={player.name}
        onChange={onChangeName}
        onBlur={onBlurName}
      />
      <Button onClick={removePlayer} className={styles.removePlayerButton}>
        Remove
      </Button>
    </div>
  );
};

const Player = connect(
  createStructuredSelector({
    gameState,
  }),
  { setPlayerById: setPlayerById, removePlayerById }
)(_Player);

export { Player };
