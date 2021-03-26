import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { ElevatedWithBlurBackGround, Button } from "@components";
import {
  scoreTarget,
  isScoreTargetValid,
  canGoBack,
} from "@models/tik-tak-boom/props";
import {
  setScoreTarget,
  scoreSetupSubmit,
  goBack,
} from "@models/tik-tak-boom/actions";
import { IState } from "@models/interfaces";

const styles = require("./styles.module.css");

interface IProps {
  scoreTarget: number;
  isScoreTargetValid: boolean;
  canGoBack: boolean;
  goBack: () => void;
  setScoreTarget: (scoreTarget: number | null) => void;
  scoreSetupSubmit: () => void;
}

const _ScoreSetup: FC<IProps> = ({
  scoreTarget,
  isScoreTargetValid,
  canGoBack,
  goBack,
  setScoreTarget,
  scoreSetupSubmit,
}): ReactElement => {
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
          other={{ disabled: !isScoreTargetValid }}
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
  createStructuredSelector<
    IState,
    {
      scoreTarget: IProps["scoreTarget"];
      isScoreTargetValid: IProps["isScoreTargetValid"];
      canGoBack: IProps["canGoBack"];
    },
    {
      scoreTarget: IProps["scoreTarget"];
      isScoreTargetValid: IProps["isScoreTargetValid"];
      canGoBack: IProps["canGoBack"];
    }
  >({
    scoreTarget,
    isScoreTargetValid,
    canGoBack,
  }),
  { setScoreTarget, scoreSetupSubmit, goBack }
)(_ScoreSetup);

export { ScoreSetup };
