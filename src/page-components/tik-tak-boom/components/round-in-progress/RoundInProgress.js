import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import {
  mode,
  syllable,
  playerNameThatPlaysNow,
} from "@models/tik-tak-boom/props";
import styles from "./styles.module.css";
import {
  goToNextPlayer,
  goToPreviousPlayer,
} from "@models/tik-tak-boom/actions";

const _RoundInProgress = ({
  goToNextPlayer,
  goToPreviousPlayer,
  mode,
  syllable,
  playerNameThatPlaysNow,
}) => {
  return (
    <div className={styles.roundInProgressContainer}>
      <div className={classnames(styles.player, "main-color", "largeText")}>
        {playerNameThatPlaysNow} is playing now
      </div>
      <div className={classnames(styles.mode, "main-color", "extraLargeText")}>
        {mode.name}
      </div>
      <div
        className={classnames(
          styles.modeDescription,
          "main-color",
          "normalText"
        )}
      >
        *{mode.description}
      </div>
      <div
        className={classnames(styles.syllable, "main-color", "extraLargeText")}
      >
        {syllable}
      </div>
      <Button
        onClick={() => goToNextPlayer()}
        className={classnames(
          styles.goToNextPlayerButton,
          "primary",
          "extraLargeText"
        )}
      >
        NEXT
      </Button>
      <Button
        onClick={() => goToPreviousPlayer()}
        className={classnames(
          styles.goToPreviousPlayerButton,
          "secondary",
          "largeText"
        )}
      >
        Previous
      </Button>
    </div>
  );
};

const RoundInProgress = connect(
  createStructuredSelector({
    mode,
    syllable,
    playerNameThatPlaysNow,
  }),
  { goToNextPlayer, goToPreviousPlayer }
)(_RoundInProgress);

export { RoundInProgress };
