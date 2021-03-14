import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "./../../../../utils/component-utils"; // Alias "@utils/component-utils";
import { Button } from "./../../../../components"; // Alias "@components";
import { startRound, goBack } from "./../../../../models/tik-tak-boom/actions"; // Alias "@models/tik-tak-boom/actions";
import {
  playerNameThatStartsRound,
  canGoBack,
} from "./../../../../models/tik-tak-boom/props"; // Alias"@models/tik-tak-boom/props";
import { IState } from "./../../../../models/interfaces"; // Alias @models/interfaces
import { ScoreBoard } from "./../";
const styles = require("./styles.module.css");

interface IProps {
  canGoBack: boolean;
  playerNameThatStartsRound: string;
  startRound: () => void;
  goBack: () => void;
}

const _StartRound: FC<IProps> = ({
  startRound,
  playerNameThatStartsRound,
  canGoBack,
  goBack,
}): ReactElement => {
  return (
    <div className={styles.startRoundContainer}>
      <div
        className={classnames(
          styles.playsFirst,
          "extraLargeText",
          "main-color"
        )}
      >
        {playerNameThatStartsRound} plays first
      </div>
      <ScoreBoard />
      <Button
        onClick={() => startRound()}
        className={classnames(
          styles.startRoundButton,
          "extraLargeText",
          "primary-dark"
        )}
      >
        PROCEED
      </Button>
      {canGoBack && (
        <Button
          onClick={() => goBack()}
          className={classnames(styles.backButton, "largeText", "secondary")}
        >
          BACK
        </Button>
      )}
    </div>
  );
};

const StartRound = connect(
  createStructuredSelector<
    IState,
    {
      canGoBack: IProps["canGoBack"];
      playerNameThatStartsRound: IProps["playerNameThatStartsRound"];
    },
    {
      canGoBack: IProps["canGoBack"];
      playerNameThatStartsRound: IProps["playerNameThatStartsRound"];
    }
  >({
    playerNameThatStartsRound,
    canGoBack,
  }),
  { startRound, goBack }
)(_StartRound);

export { StartRound };
