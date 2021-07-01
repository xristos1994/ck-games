import { GameStates } from './../config'; // Alias "models/tik-tak-boom/config";
import { IState } from 'models/tik-tak-boom/interfaces';

export const restartGameState: (state: IState) => IState = (state) => {
  const newState = { ...state };
  newState.players = newState.players.map((player) => ({
    ...player,
    isActive: true,
    playsNow: null,
    startsRound: null,
    numOfBooms: 0
  }));

  newState.gameState = GameStates.setPlayers;
  newState.mode = null;
  newState.syllable = null;

  return newState;
};
