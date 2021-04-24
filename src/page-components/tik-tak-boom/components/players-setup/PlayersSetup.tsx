import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { ElevatedWithBlurBackGround, Button } from "@components";
import { players, isPlayersSetupValid } from "@models/tik-tak-boom/props";
import { Player } from "./components";
import { addPlayer, playersSetupSubmit } from "@models/tik-tak-boom/actions";
import { IState } from "@models/interfaces";

const styles = require("./styles.module.css");

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
}

const _PlayersSetup: FC<IProps> = ({
  players,
  playersSetupSubmit,
  addPlayer,
  isPlayersSetupValid,
}): ReactElement => {
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
          Players' Setup
        </div>
        <div className={styles.playersContainer}>
          {players.map(player => (
            <Player key={player.id} player={player} />
          ))}
        </div>
        <Button
          onClick={() => addPlayer()}
          className={classnames(styles.addPlayerButton, "largeText", "primary")}
        >
          Add Player
        </Button>

        <Button
          other={{ disabled: !isPlayersSetupValid }}
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
)(_PlayersSetup);

export { PlayersSetup };
