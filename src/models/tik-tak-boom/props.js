import { isPositiveInteger } from "@utils/general";

export const tikTakBoomStarted = state =>
  state.websiteRootReducer.tikTakBoom.tikTakBoomStarted;

export const players = state => state.websiteRootReducer.tikTakBoom.players;

export const playerById = state => id =>
  state.websiteRootReducer.tikTakBoom.players.find(p => p.id === id);

export const playerNameThatPlaysNow = state => {
  const player = state.websiteRootReducer.tikTakBoom.players.find(
    player => player.playsNow
  );
  return player ? player.name : null;
};

export const playerNameThatStartsRound = state => {
  const player = state.websiteRootReducer.tikTakBoom.players.find(
    player => player.startsRound
  );
  return player ? player.name : null;
};

export const gameState = state => state.websiteRootReducer.tikTakBoom.gameState;

export const mode = state => state.websiteRootReducer.tikTakBoom.mode;

export const syllable = state => state.websiteRootReducer.tikTakBoom.syllable;

export const scoreTarget = state =>
  state.websiteRootReducer.tikTakBoom.scoreTarget;

export const remainingTime = state =>
  state.websiteRootReducer.tikTakBoom.clock.remainingTime;

export const isClockRunning = state =>
  state.websiteRootReducer.tikTakBoom.clock.isRunning;

export const isPlayersSetupValid = state => {
  const players = state.websiteRootReducer.tikTakBoom.players;

  return (
    !players.find(player => player.name.trim().length === 0) &&
    players.filter(player => player.isActive).length >= 2
  );
};

export const isScoreTargetValid = state => {
  const scoreTarget = state.websiteRootReducer.tikTakBoom.scoreTarget;
  if (!isPositiveInteger(`${scoreTarget}`)) {
    return false;
  }
  return scoreTarget > 0;
};
