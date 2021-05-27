import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import {
  scoreTarget,
  canGoBack,
  availableScoreTargets,
} from "@models/pantomime/props";
import {
  setScoreTarget,
  scoreSetupSubmit,
  goBack,
} from "@models/pantomime/actions";
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
    setScoreTarget(Number(e.target.value));
  };

  return (
    <div className={classnames(styles.scoreSetupContainer)}>
      <div className={classnames(styles.scoreSetupTitle)}>
        Επιλέξτε το σκορ νίκης
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
        ΣΥΝΕΧΕΙΑ
      </Button>
      {canGoBack && (
        <Button
          onClick={() => goBack()}
          className={classnames(styles.backButton)}
        >
          ΠΙΣΩ
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
    canGoBack,
    availableScoreTargets,
  }),
  { setScoreTarget, scoreSetupSubmit, goBack }
)(_ScoreSetup);

export { ScoreSetup };
