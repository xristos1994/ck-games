import { GameStates } from "./../config";
import { IState } from "./../interfaces";

export const restartGameState: (state: IState) => IState = state => {
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
