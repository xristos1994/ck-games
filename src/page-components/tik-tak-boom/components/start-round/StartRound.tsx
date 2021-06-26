import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { startRound, goBack } from '@models/tik-tak-boom/actions';
import { playerNameThatStartsRound, canGoBack } from '@models/tik-tak-boom/props';
import { IState } from '@models/interfaces';
import { ScoreBoard } from './../score-board'; // Alias "page-components/tik-tak-boom/components";
import styles from './styles.module.css';

interface IProps {
  canGoBack: boolean;
  playerNameThatStartsRound: string | null;
  startRound: () => void;
  goBack: () => void;
  t: ITranslate;
}

const _StartRound: FC<IProps> = ({ startRound, playerNameThatStartsRound, canGoBack, goBack, t }): ReactElement => {
  return (
    <div className={styles.startRoundContainer}>
      <div className={classnames(styles.playsFirst)}>
        {t('Player, it is your turn', [playerNameThatStartsRound as string])}
      </div>
      <ScoreBoard />
      <Button onClick={() => startRound()} className={classnames(styles.startRoundButton)}>
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

const StartRound = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        canGoBack: IProps['canGoBack'];
        playerNameThatStartsRound: IProps['playerNameThatStartsRound'];
      },
      {
        canGoBack: IProps['canGoBack'];
        playerNameThatStartsRound: IProps['playerNameThatStartsRound'];
      }
    >({
      playerNameThatStartsRound,
      canGoBack
    }),
    { startRound, goBack }
  ),
  withTranslation
)(_StartRound);

export { StartRound };
