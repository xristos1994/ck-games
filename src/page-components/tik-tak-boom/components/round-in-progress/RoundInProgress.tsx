import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { mode, syllable, playerNameThatPlaysNow } from '@models/tik-tak-boom/props';
import { goToNextPlayer, goToPreviousPlayer } from '@models/tik-tak-boom/actions';
import { IState } from '@models/interfaces';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./RoundInProgress.module.css');

interface IProps {
  goToNextPlayer: () => void;
  goToPreviousPlayer: () => void;
  mode: { id: string; name: string; description: string };
  syllable: string | null;
  playerNameThatPlaysNow: string | null;
  t: ITranslate;
}

export const _RoundInProgress: FC<IProps> = ({
  goToNextPlayer,
  goToPreviousPlayer,
  mode,
  syllable,
  playerNameThatPlaysNow,
  t
}): ReactElement => {
  return (
    <div className={styles.roundInProgressContainer}>
      <div className={classnames(styles.player)}>
        {t('Player, it is your turn', [playerNameThatPlaysNow as string])}
      </div>
      <div className={classnames(styles.mode)}>{mode && mode.name}</div>
      <div className={classnames(styles.modeDescription)}>*{t(mode.description)}</div>
      <div className={classnames(styles.syllable)}>{syllable}</div>
      <Button onClick={goToNextPlayer} className={classnames(styles.goToNextPlayerButton)}>
        {t('Next Player')}
      </Button>
      <Button onClick={goToPreviousPlayer} className={classnames(styles.goToPreviousPlayerButton)}>
        {t('Previous Player')}
      </Button>
    </div>
  );
};

const RoundInProgress = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        mode: IProps['mode'] | null;
        syllable: IProps['syllable'];
        playerNameThatPlaysNow: IProps['playerNameThatPlaysNow'];
      },
      {
        mode: IProps['mode'] | null;
        syllable: IProps['syllable'];
        playerNameThatPlaysNow: IProps['playerNameThatPlaysNow'];
      }
    >({
      mode,
      syllable,
      playerNameThatPlaysNow
    }),
    { goToNextPlayer, goToPreviousPlayer }
  ),
  withTranslation
)(_RoundInProgress);

export { RoundInProgress };
