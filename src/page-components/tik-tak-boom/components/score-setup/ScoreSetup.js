import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { ElevatedWithBlurBackGround, Button } from "@components";
import {
  scoreTarget,
  isScoreTargetValid,
  canGoBack,
} from "@models/tik-tak-boom/props";
import * as styles from "./styles.module.css";
import {
  setScoreTarget,
  scoreSetupSubmit,
  goBack,
} from "@models/tik-tak-boom/actions";

const _ScoreSetup = ({
  scoreTarget,
  isScoreTargetValid,
  canGoBack,
  goBack,
  setScoreTarget,
  scoreSetupSubmit,
}) => {
  const onScoreTargetChange = e => {
    const value = e.target.value;
    if (!value.trim()) {
      setScoreTarget(null);
    } else {
      setScoreTarget(Number(e.target.value));
    }
  };

  return (
    <ElevatedWithBlurBackGround>
      <div className={classnames(styles.scoreSetupContainer, "main-bg-color")}>
        <div
          className={classnames(
            styles.scoreSetupTitle,
            "extraLargeText",
            "main-color"
          )}
        >
          Set winning score
        </div>
        <input
          className={classnames(styles.scoreTargetInput, "largeText")}
          type="number"
          value={scoreTarget}
          onChange={onScoreTargetChange}
        />
        <Button
          disabled={!isScoreTargetValid}
          onClick={() => scoreSetupSubmit()}
          className={classnames(
            styles.scoreTargetSetupSubmitButton,
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
    </ElevatedWithBlurBackGround>
  );
};

const ScoreSetup = connect(
  createStructuredSelector({
    scoreTarget,
    isScoreTargetValid,
    canGoBack,
  }),
  { setScoreTarget, scoreSetupSubmit, goBack }
)(_ScoreSetup);

export { ScoreSetup };
