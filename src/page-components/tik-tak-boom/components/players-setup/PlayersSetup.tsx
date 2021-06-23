import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames, compose } from "@utils/component-utils";
import { withTranslation, ITranslate } from "@models/i18n/hoc";
import { Button } from "@components";
import { players, isPlayersSetupValid } from "@models/tik-tak-boom/props";
import { Player } from "./components";
import { addPlayer, playersSetupSubmit } from "@models/tik-tak-boom/actions";
import { IState } from "@models/interfaces";

import styles from "./styles.module.css";

interface IProps {
  players: {
    id: number;
    isActive: boolean;
    numOfBooms: number;
    name: string;
    playsNow: boolean | null;
  }[];
  playersSetupSubmit: () => void;
  addPlayer: () => void;
  isPlayersSetupValid: boolean;
  t: ITranslate;
}

const _PlayersSetup: FC<IProps> = ({
  players,
  playersSetupSubmit,
  addPlayer,
  isPlayersSetupValid,
  t,
}): ReactElement => {
  return (
    <div className={classnames(styles.playersSetupContainer)}>
      <div className={classnames(styles.playersSetupTitle)}>
        {t("Player Setup")}
      </div>
      <div className={styles.playersContainer}>
        {players.map(player => (
          <Player key={player.id} player={player} />
        ))}
      </div>
      <Button
        onClick={() => addPlayer()}
        className={classnames(styles.addPlayerButton)}
      >
        {t("Add Player")}
      </Button>

      <Button
        other={{ disabled: !isPlayersSetupValid }}
        onClick={() => playersSetupSubmit()}
        className={classnames(styles.playersSetupSubmitButton)}
      >
        {t("CONTINUE")}
      </Button>
    </div>
  );
};

const PlayersSetup = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        players: IProps["players"];
        isPlayersSetupValid: IProps["isPlayersSetupValid"];
      },
      {
        players: IProps["players"];
        isPlayersSetupValid: IProps["isPlayersSetupValid"];
      }
    >({
      players,
      isPlayersSetupValid,
    }),
    { playersSetupSubmit, addPlayer }
  ),
  withTranslation
)(_PlayersSetup);

export { PlayersSetup };
