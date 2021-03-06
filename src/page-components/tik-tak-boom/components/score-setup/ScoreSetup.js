import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ElevatedWithBlurBackGround, Button } from "@components";
import { scoreTarget, isScoreTargetValid } from "@models/tik-tak-boom/props";
import styles from "./styles.module.css";
import { setScoreTarget, scoreSetupSubmit } from "@models/tik-tak-boom/actions";

const _ScoreSetup = ({
  scoreTarget,
  isScoreTargetValid,
  setScoreTarget,
  scoreSetupSubmit,
}) => {
  const onScoreTargetChange = e => {
    const value = e.target.value;
    if (!value.trim()) {
      setScoreTarget("");
    } else {
      setScoreTarget(Number(e.target.value));
    }
  };

  return (
    <ElevatedWithBlurBackGround>
      <div className={styles.scoreSetupContainer}>
        <input
          className={styles.scoreTargetInput}
          type="number"
          value={scoreTarget}
          onChange={onScoreTargetChange}
        />
        <Button
          disabled={!isScoreTargetValid}
          onClick={() => scoreSetupSubmit()}
          className={styles.scoreTargetSetupSubmitButton}
        >
          OK
        </Button>
      </div>
    </ElevatedWithBlurBackGround>
  );
};

const ScoreSetup = connect(
  createStructuredSelector({
    scoreTarget,
    isScoreTargetValid,
  }),
  { setScoreTarget, scoreSetupSubmit }
)(_ScoreSetup);

export { ScoreSetup };
