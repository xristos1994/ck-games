import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import {
  mode,
  syllable,
  playerNameThatPlaysNow,
} from "@models/tik-tak-boom/props";
import {
  goToNextPlayer,
  goToPreviousPlayer,
} from "@models/tik-tak-boom/actions";
import { IState } from "@models/interfaces";

const styles = require("./styles.module.css");

interface IProps {
  goToNextPlayer: () => void;
  goToPreviousPlayer: () => void;
  mode: { id: string; name: string; description: string } | null;
  syllable: string;
  playerNameThatPlaysNow: string;
}

const _RoundInProgress: FC<IProps> = ({
  goToNextPlayer,
  goToPreviousPlayer,
  mode,
  syllable,
  playerNameThatPlaysNow,
}): ReactElement => {
  return (
    <div className={styles.roundInProgressContainer}>
      <div className={classnames(styles.player)}>
        {playerNameThatPlaysNow} is playing now
      </div>
      <div className={classnames(styles.mode)}>{mode.name}</div>
      <div className={classnames(styles.modeDescription)}>
        *{mode.description}
      </div>
      <div className={classnames(styles.syllable)}>{syllable}</div>
      <Button
        onClick={() => goToNextPlayer()}
        className={classnames(styles.goToNextPlayerButton)}
      >
        NEXT
      </Button>
      <Button
        onClick={() => goToPreviousPlayer()}
        className={classnames(styles.goToPreviousPlayerButton)}
      >
        Previous
      </Button>
    </div>
  );
};

const RoundInProgress = connect(
  createStructuredSelector<
    IState,
    {
      mode: IProps["mode"];
      syllable: IProps["syllable"];
      playerNameThatPlaysNow: IProps["playerNameThatPlaysNow"];
    },
    {
      mode: IProps["mode"];
      syllable: IProps["syllable"];
      playerNameThatPlaysNow: IProps["playerNameThatPlaysNow"];
    }
  >({
    mode,
    syllable,
    playerNameThatPlaysNow,
  }),
  { goToNextPlayer, goToPreviousPlayer }
)(_RoundInProgress);

export { RoundInProgress };
