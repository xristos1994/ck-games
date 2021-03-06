import { GameStates, AvailableScoreTargets } from './config';
import { IState } from '@models/interfaces';
import { IPlayer, IState as IModelState } from './interfaces';

export const tikTakBoomStarted: (state: IState) => IModelState['tikTakBoomStarted'] = (state) =>
  state.websiteRootReducer.tikTakBoom.tikTakBoomStarted;

export const players: (state: IState) => IModelState['players'] = (state) =>
  state.websiteRootReducer.tikTakBoom.players;

export const playerById: (state: IState) => (id: IPlayer['id']) => IPlayer = (state) => (id) =>
  players(state).find((player) => player.id === id) as IPlayer;

export const playerNameThatPlaysNow: (state: IState) => IPlayer['name'] | null = (state) => {
  const player = players(state).find((player) => player.playsNow);
  return player ? player.name : null;
};

export const playerNameThatStartsRound: (state: IState) => string | null = (state) => {
  const player = players(state).find((player) => player.startsRound);
  return player ? player.name : null;
};

export const gameState: (state: IState) => IModelState['gameState'] = (state) =>
  state.websiteRootReducer.tikTakBoom.gameState;

export const mode: (state: IState) => IModelState['mode'] = (state) => state.websiteRootReducer.tikTakBoom.mode;

export const syllable: (state: IState) => IModelState['syllable'] = (state) => {
  let result = state.websiteRootReducer.tikTakBoom.syllable as string;
  try {
    result = JSON.parse(result)[state.websiteRootReducer.i18n.lang.code];
  } catch (e) {
    // fail silently
  }

  return result;
};

export const scoreTarget: (state: IState) => IModelState['scoreTarget'] = (state) =>
  state.websiteRootReducer.tikTakBoom.scoreTarget;

export const isPlayersSetupValid: (state: IState) => boolean = (state) => {
  const _players = players(state);

  return (
    !_players.find((player) => player.name.trim().length === 0)
    && _players.filter((player) => player.isActive).length >= 2
  );
};

export const canGoBack: (state: IState) => boolean = (state) => {
  const _gameState = gameState(state);
  const hasGameStarted
    = !!players(state).find((player) => !player.isActive) || !!players(state).find((player) => player.numOfBooms > 0);
  return _gameState === GameStates.setScoreTarget || (_gameState === GameStates.waitForRoundStart && !hasGameStarted);
};

export const availableScoreTargets: () => IModelState['scoreTarget'][] = () => AvailableScoreTargets.allScoreTargets;
