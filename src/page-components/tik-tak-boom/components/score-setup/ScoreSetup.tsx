import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { scoreTarget, canGoBack, availableScoreTargets } from '@models/tik-tak-boom/props';
import { setScoreTarget, scoreSetupSubmit, goBack } from '@models/tik-tak-boom/actions';
import { IState } from '@models/interfaces';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./styles.module.css');

interface IProps {
  scoreTarget: number;
  canGoBack: boolean;
  availableScoreTargets: number[];
  goBack: () => void;
  setScoreTarget: (scoreTarget: number | null) => void;
  scoreSetupSubmit: () => void;
  t: ITranslate;
}

const _ScoreSetup: FC<IProps> = ({
  scoreTarget,
  canGoBack,
  availableScoreTargets,
  goBack,
  setScoreTarget,
  scoreSetupSubmit,
  t
}): ReactElement => {
  const onScoreTargetChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setScoreTarget(Number(e.target.value));
  };

  return (
    <div className={classnames(styles.scoreSetupContainer)}>
      <div className={classnames(styles.scoreSetupTitle)}>{t('Choose Winning Score')}</div>
      <select className={classnames(styles.scoreTargetInput)} value={scoreTarget} onChange={onScoreTargetChange}>
        {availableScoreTargets.map((score) => (
          <option key={score} value={score}>
            {score}
          </option>
        ))}
      </select>
      <Button onClick={() => scoreSetupSubmit()} className={classnames(styles.scoreTargetSetupSubmitButton)}>
        {t('CONTINUE')}
      </Button>
      {canGoBack && (
        <Button onClick={() => goBack()} className={classnames(styles.backButton)}>
          {t('BACK')}
        </Button>
      )}
    </div>
  );
};

const ScoreSetup = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        scoreTarget: IProps['scoreTarget'];
        canGoBack: IProps['canGoBack'];
        availableScoreTargets: IProps['availableScoreTargets'];
      },
      {
        scoreTarget: IProps['scoreTarget'];
        canGoBack: IProps['canGoBack'];
        availableScoreTargets: IProps['availableScoreTargets'];
      }
    >({
      scoreTarget,
      availableScoreTargets,
      canGoBack
    }),
    { setScoreTarget, scoreSetupSubmit, goBack }
  ),
  withTranslation
)(_ScoreSetup);

export { ScoreSetup };
