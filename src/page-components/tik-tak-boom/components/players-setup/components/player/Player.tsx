import React, { FC, ReactElement, ChangeEvent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import { setPlayerById, removePlayerById } from "@models/tik-tak-boom/actions";
import { players } from "@models/tik-tak-boom/props";
import { IState } from "@models/interfaces";
const styles = require("./styles.module.css");

interface IProps {
  player: {
    id: number;
    isActive: boolean;
    numOfBooms: number;
    name: string;
    playsNow: boolean | null;
  };
  setPlayerById: (player: IProps["player"]) => void;
  numOfPlayers: IProps["player"]["id"];
  removePlayerById: (id: IProps["player"]["id"]) => void;
}

const _Player: FC<IProps> = ({
  player,
  setPlayerById,
  numOfPlayers,
  removePlayerById,
}): ReactElement => {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setPlayerById({ ...player, name: e.target.value });
  };

  const onBlurName = (): void => {
    if (player.name.trim() !== player.name) {
      setPlayerById({ ...player, name: player.name.trim() });
    }
  };

  const removePlayer = (): void => {
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
        other={{ disabled: numOfPlayers === 2 }}
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
  createStructuredSelector<
    IState,
    {
      numOfPlayers: IProps["numOfPlayers"];
    },
    {
      numOfPlayers: IProps["numOfPlayers"];
    }
  >({
    numOfPlayers: (state: IState): IProps["numOfPlayers"] =>
      players(state).length,
  }),
  { setPlayerById: setPlayerById, removePlayerById }
)(_Player);

export { Player };
