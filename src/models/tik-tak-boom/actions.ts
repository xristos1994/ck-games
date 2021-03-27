import { Action } from "@core/actions";
import { IAction } from "@core/actions/interfaces";
import { noAction } from "@core/models/core/actions";
import { IMode } from "./config/interfaces";
import { GameStates } from "./config";
import { IPlayer, IState, ISyllable, IScoreTarget } from "./interfaces";

import {
  startClock,
  resetClock,
  clockRemainingTimeBecameZero,
  clockTriggerTikTakSound,
} from "@models/clock/actions";

export {
  noAction,
  startClock,
  resetClock,
  clockRemainingTimeBecameZero,
  clockTriggerTikTakSound,
};

export const startTikTakBoom: IAction = Action("@@", "START_TIK_TAK_BOOM");

export const setGameState: IAction<GameStates> = Action<GameStates>(
  "TIK_TAK_BOOM",
  "SET_GAME_STATE"
);
export const updateGameState: IAction<GameStates> = Action<GameStates>(
  "TIK_TAK_BOOM",
  "UPDATE_GAME_STATE"
);

export const updateMode: IAction<IMode> = Action<IMode>(
  "TIK_TAK_BOOM",
  "UPDATE_MODE"
);

export const updateSyllable: IAction<ISyllable> = Action<ISyllable>(
  "TIK_TAK_BOOM",
  "UPDATE_SYLLABLE"
);

export const setScoreTarget: IAction<IScoreTarget> = Action<IScoreTarget>(
  "TIK_TAK_BOOM",
  "SET_SCORE_TARGET"
);
export const updateScoreTarget: IAction<IScoreTarget> = Action<IScoreTarget>(
  "TIK_TAK_BOOM",
  "UPDATE_SCORE_TARGET"
);

export const setPlayers: IAction<IPlayer[]> = Action<IPlayer[]>(
  "TIK_TAK_BOOM",
  "SET_PLAYERS"
);
export const setPlayerById: IAction<IPlayer> = Action<IPlayer>(
  "TIK_TAK_BOOM",
  "SET_PLAYER_BY_ID"
);
export const removePlayerById: IAction<IPlayer["id"]> = Action<IPlayer["id"]>(
  "TIK_TAK_BOOM",
  "REMOVE_PLAYER_BY_ID"
);
export const addPlayer: IAction = Action("TIK_TAK_BOOM", "ADD_PLAYER");
export const goToNextPlayer: IAction = Action(
  "TIK_TAK_BOOM",
  "GO_TO_NEXT_PLAYER"
);
export const goToPreviousPlayer: IAction = Action(
  "TIK_TAK_BOOM",
  "GO_TO_PREVIOUS_PLAYER"
);
export const updatePlayers: IAction<IPlayer[]> = Action<IPlayer[]>(
  "TIK_TAK_BOOM",
  "UPDATE_PLAYERS"
);

export const playersSetupSubmit: IAction = Action(
  "TIK_TAK_BOOM",
  "PLAYERS_SETUP_SUBMIT"
);

export const scoreSetupSubmit: IAction = Action(
  "TIK_TAK_BOOM",
  "SCORE_SETUP_SUBMIT"
);

export const startRound: IAction = Action("TIK_TAK_BOOM", "START_ROUND");
export const endRound: IAction = Action("TIK_TAK_BOOM", "END_ROUND");
export const goToNextRound: IAction = Action(
  "TIK_TAK_BOOM",
  "GO_TO_NEXT_ROUND"
);
export const restartGame: IAction = Action("TIK_TAK_BOOM", "RESTART_GAME");

export const updateGameReduxState: IAction<IState> = Action<IState>(
  "TIK_TAK_BOOM",
  "UPDATE_GAME_REDUX_STATE"
);

export const setWhoLost: IAction<IPlayer["id"]> = Action<IPlayer["id"]>(
  "TIK_TAK_BOOM",
  "SET_WHO_LOST"
);

export const initializeGame: IAction = Action(
  "TIK_TAK_BOOM",
  "INITIALIZE_GAME"
);

export const goBack: IAction = Action("TIK_TAK_BOOM", "GO_BACK");
