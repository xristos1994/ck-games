import { GameStates } from "./../config"; // Alias "models/tik-tak-boom/config";
import { IState } from "models/pantomime/interfaces";

export const restartGameState: (state: IState) => IState = state => {
  const newState = { ...state };
  newState.teams = newState.teams.map(team => ({
    ...team,
    playsNow: false,
    score: 0,
  }));

  newState.gameState = GameStates.setTeams;
  newState.movie = "";

  return newState;
};
