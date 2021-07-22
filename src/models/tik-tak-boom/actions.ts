import { Action } from '@core/actions';
import { IActionCreator } from '@core/actions/interfaces';
import { noAction } from '@core/models/core/actions';
import { IMode } from './config/interfaces';
import { GameStates } from './config';
import { IPlayer, IState, ISyllable, IScoreTarget } from './interfaces';

import { startClock, resetClock, clockRemainingTimeBecameZero, clockTriggerTikTakSound } from '@models/clock/actions';

export { noAction, startClock, resetClock, clockRemainingTimeBecameZero, clockTriggerTikTakSound };

export const startTikTakBoom: IActionCreator<void> = Action('@@', 'START_TIK_TAK_BOOM');

export const setGameState: IActionCreator<GameStates> = Action<GameStates>('TIK_TAK_BOOM', 'SET_GAME_STATE');
export const updateGameState: IActionCreator<GameStates> = Action<GameStates>('TIK_TAK_BOOM', 'UPDATE_GAME_STATE');

export const updateMode: IActionCreator<IMode> = Action<IMode>('TIK_TAK_BOOM', 'UPDATE_MODE');

export const updateSyllable: IActionCreator<ISyllable> = Action<ISyllable>('TIK_TAK_BOOM', 'UPDATE_SYLLABLE');

export const setScoreTarget: IActionCreator<IScoreTarget> = Action<IScoreTarget>('TIK_TAK_BOOM', 'SET_SCORE_TARGET');
export const updateScoreTarget: IActionCreator<IScoreTarget> = Action<IScoreTarget>(
  'TIK_TAK_BOOM',
  'UPDATE_SCORE_TARGET'
);

export const setPlayers: IActionCreator<IPlayer[]> = Action<IPlayer[]>('TIK_TAK_BOOM', 'SET_PLAYERS');
export const setPlayerById: IActionCreator<IPlayer> = Action<IPlayer>('TIK_TAK_BOOM', 'SET_PLAYER_BY_ID');
export const removePlayerById: IActionCreator<IPlayer['id']> = Action<IPlayer['id']>(
  'TIK_TAK_BOOM',
  'REMOVE_PLAYER_BY_ID'
);
export const addPlayer: IActionCreator<void> = Action('TIK_TAK_BOOM', 'ADD_PLAYER');
export const goToNextPlayer: IActionCreator<void> = Action('TIK_TAK_BOOM', 'GO_TO_NEXT_PLAYER');
export const goToPreviousPlayer: IActionCreator<void> = Action('TIK_TAK_BOOM', 'GO_TO_PREVIOUS_PLAYER');
export const updatePlayers: IActionCreator<IPlayer[]> = Action<IPlayer[]>('TIK_TAK_BOOM', 'UPDATE_PLAYERS');

export const playersSetupSubmit: IActionCreator<void> = Action('TIK_TAK_BOOM', 'PLAYERS_SETUP_SUBMIT');

export const scoreSetupSubmit: IActionCreator<void> = Action('TIK_TAK_BOOM', 'SCORE_SETUP_SUBMIT');

export const startRound: IActionCreator<void> = Action('TIK_TAK_BOOM', 'START_ROUND');
export const endRound: IActionCreator<void> = Action('TIK_TAK_BOOM', 'END_ROUND');
export const goToNextRound: IActionCreator<void> = Action('TIK_TAK_BOOM', 'GO_TO_NEXT_ROUND');
export const restartGame: IActionCreator<void> = Action('TIK_TAK_BOOM', 'RESTART_GAME');

export const updateGameReduxState: IActionCreator<IState> = Action<IState>('TIK_TAK_BOOM', 'UPDATE_GAME_REDUX_STATE');

export const setWhoLost: IActionCreator<IPlayer['id']> = Action<IPlayer['id']>('TIK_TAK_BOOM', 'SET_WHO_LOST');

export const initializeGame: IActionCreator<void> = Action('TIK_TAK_BOOM', 'INITIALIZE_GAME');

export const goBack: IActionCreator<void> = Action('TIK_TAK_BOOM', 'GO_BACK');
