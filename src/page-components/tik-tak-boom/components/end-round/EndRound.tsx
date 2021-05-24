import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import { classnames } from "@utils/component-utils";
import { goToNextRound, setWhoLost } from "@models/tik-tak-boom/actions";
import { players } from "@models/tik-tak-boom/props";
import { IState } from "@models/interfaces";
import { BombIcon } from "@components/icons";
const styles = require("./styles.module.css");

interface IProps {
  players: {
    id: number;
    isActive: boolean;
    numOfBooms: number;
    name: string;
    playsNow: boolean | null;
  }[];
  goToNextRound: () => void;
  setWhoLost: (id: number) => void;
}

const _EndRound: FC<IProps> = ({
  players,
  goToNextRound,
  setWhoLost,
}): ReactElement => {
  const playerNow = players.find(player => player.playsNow);

  return (
    <div className={styles.endRoundContainer}>
      <div className={classnames(styles.whoLost)}>
        Bomb boomed on {playerNow.name}'
        {playerNow.name.slice(-1).toLowerCase() === "s" ? "" : "s"} hands
      </div>
      <div className={styles.playersContainer}>
        {players.map(player => (
          <Button
            key={player.id}
            other={{ disabled: !player.isActive }}
            className={classnames(styles.player, {
              [styles.playerNow]: playerNow.id === player.id,
              [styles.playerNotNow]: playerNow.id !== player.id,
            })}
            onClick={() => player.isActive && setWhoLost(player.id)}
          >
            {playerNow.id === player.id ? (
              <BombIcon className={styles.icon} />
            ) : null}
            {player.name}
            {playerNow.id === player.id ? (
              <BombIcon className={styles.icon} />
            ) : null}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => goToNextRound()}
        className={classnames(styles.proceedButton)}
      >
        PROCEED
      </Button>
    </div>
  );
};

const EndRound = connect(
  createStructuredSelector<
    IState,
    {
      players: IProps["players"];
    },
    {
      players: IProps["players"];
    }
  >({
    players,
  }),
  { goToNextRound, setWhoLost }
)(_EndRound);

export { EndRound };
