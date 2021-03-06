import React, { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from '@utils/component-utils';
import { SEO, PlayersSetup, ScoreSetup, StartRound, RoundInProgress, EndRound, EndGame } from './components';
import { gameState } from '@models/tik-tak-boom/props';
import { initializeGame } from '@models/tik-tak-boom/actions';
import { GameStates } from '@models/tik-tak-boom/config';
import { IState } from '@models/interfaces';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./TikTakBoom.module.css');

interface IProps {
  gameState: GameStates;
  initializeGame: () => void;
}

export const _TikTakBoom: FC<IProps> = ({ gameState, initializeGame }): ReactElement => {
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const playerSetup = gameState === GameStates.setPlayers && <PlayersSetup />;

  const scoreSetup = gameState === GameStates.setScoreTarget && <ScoreSetup />;

  const startRound = gameState === GameStates.waitForRoundStart && <StartRound />;

  const roundInProgress = gameState === GameStates.roundInProgress && <RoundInProgress />;

  const endGame = gameState === GameStates.gameEnded && <EndGame />;

  const endRound = gameState === GameStates.roundEnded && <EndRound />;

  return (
    <div className={styles.pageBody}>
      <SEO />
      {playerSetup}
      {scoreSetup}
      {startRound}
      {roundInProgress}
      {endRound}
      {endGame}
    </div>
  );
};

const TikTakBoom = compose(
  connect(
    createStructuredSelector<IState, { gameState: IProps['gameState'] }, { gameState: IProps['gameState'] }>({
      gameState
    }),
    { initializeGame }
  )
)(_TikTakBoom);

export { TikTakBoom };
