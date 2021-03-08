import { GameStates } from "./../config";

export const restartGameState = state => {
  const newState = { ...state };
  newState.players = newState.players.map(player => ({
    ...player,
    isActive: true,
    playsNow: null,
    startsRound: null,
    numOfBooms: 0,
  }));

  newState.gameState = GameStates.setPlayers;
  newState.mode = null;
  newState.syllable = null;
  newState.clock = {
    remainingTime: null,
    isRunning: false,
  };

  return newState;
};
