import { isPositiveInteger } from "@utils/general";
import { GameStates } from "./config";

export const tikTakBoomStarted = state =>
  state.websiteRootReducer.tikTakBoom.tikTakBoomStarted;

export const players = state => state.websiteRootReducer.tikTakBoom.players;

export const playerById = state => id => players(state).find(p => p.id === id);

export const playerNameThatPlaysNow = state => {
  const player = players(state).find(player => player.playsNow);
  return player ? player.name : null;
};

export const playerNameThatStartsRound = state => {
  const player = players(state).find(player => player.startsRound);
  return player ? player.name : null;
};

export const gameState = state => state.websiteRootReducer.tikTakBoom.gameState;

export const mode = state => state.websiteRootReducer.tikTakBoom.mode;

export const syllable = state => state.websiteRootReducer.tikTakBoom.syllable;

export const scoreTarget = state =>
  state.websiteRootReducer.tikTakBoom.scoreTarget;

export const isClockRunning = state =>
  state.websiteRootReducer.tikTakBoom.clock.isRunning;

export const isPlayersSetupValid = state => {
  const _players = players(state);

  return (
    !_players.find(player => player.name.trim().length === 0) &&
    _players.filter(player => player.isActive).length >= 2
  );
};

export const isScoreTargetValid = state => {
  const _scoreTarget = scoreTarget(state);
  if (!isPositiveInteger(`${_scoreTarget}`)) {
    return false;
  }
  return _scoreTarget > 0;
};

export const canGoBack = state => {
  const _gameState = gameState(state);
  const hasGameStarted =
    !!players(state).find(player => !player.isActive) ||
    !!players(state).find(player => player.numOfBooms > 0);
  return (
    _gameState === GameStates.setScoreTarget ||
    (_gameState === GameStates.waitForRoundStart && !hasGameStarted)
  );
};
