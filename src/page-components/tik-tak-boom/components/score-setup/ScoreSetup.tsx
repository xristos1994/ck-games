import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import {
  scoreTarget,
  canGoBack,
  availableScoreTargets,
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
  canGoBack: boolean;
  availableScoreTargets: number[];
  goBack: () => void;
  setScoreTarget: (scoreTarget: number | null) => void;
  scoreSetupSubmit: () => void;
}

const _ScoreSetup: FC<IProps> = ({
  scoreTarget,
  canGoBack,
  availableScoreTargets,
  goBack,
  setScoreTarget,
  scoreSetupSubmit,
}): ReactElement => {
  const onScoreTargetChange = e => {
    setScoreTarget(e.target.value);
  };

  return (
    <div className={classnames(styles.scoreSetupContainer)}>
      <div className={classnames(styles.scoreSetupTitle)}>
        Set winning score
      </div>
      <select
        className={classnames(styles.scoreTargetInput)}
        value={scoreTarget}
        onChange={onScoreTargetChange}
      >
        {availableScoreTargets.map(score => (
          <option key={score} value={score}>
            {score}
          </option>
        ))}
      </select>
      <Button
        onClick={() => scoreSetupSubmit()}
        className={classnames(styles.scoreTargetSetupSubmitButton)}
      >
        PROCEED
      </Button>
      {canGoBack && (
        <Button
          onClick={() => goBack()}
          className={classnames(styles.backButton)}
        >
          BACK
        </Button>
      )}
    </div>
  );
};

const ScoreSetup = connect(
  createStructuredSelector<
    IState,
    {
      scoreTarget: IProps["scoreTarget"];
      canGoBack: IProps["canGoBack"];
      availableScoreTargets: IProps["availableScoreTargets"];
    },
    {
      scoreTarget: IProps["scoreTarget"];
      canGoBack: IProps["canGoBack"];
      availableScoreTargets: IProps["availableScoreTargets"];
    }
  >({
    scoreTarget,
    availableScoreTargets,
    canGoBack,
  }),
  { setScoreTarget, scoreSetupSubmit, goBack }
)(_ScoreSetup);

export { ScoreSetup };
