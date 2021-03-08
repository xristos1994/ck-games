import { Action } from "@core/actions";
import { noAction } from "@core/models/core/actions";

export { noAction };

export const startTikTakBoom = Action("@@", "START_TIK_TAK_BOOM");

export const setGameState = Action("TIK_TAK_BOOM", "SET_GAME_STATE");
export const updateGameState = Action("TIK_TAK_BOOM", "UPDATE_GAME_STATE");

export const updateMode = Action("TIK_TAK_BOOM", "UPDATE_MODE");

export const updateSyllable = Action("TIK_TAK_BOOM", "UPDATE_SYLLABLE");

export const setScoreTarget = Action("TIK_TAK_BOOM", "SET_SCORE_TARGET");
export const updateScoreTarget = Action("TIK_TAK_BOOM", "UPDATE_SCORE_TARGET");

export const reduceRemainingTime = Action(
  "TIK_TAK_BOOM",
  "REDUCE_REMAINING_TIME"
);
export const updateRemainingTime = Action(
  "TIK_TAK_BOOM",
  "UPDATE_REMAINING_TIME"
);
export const updateClockIsRunning = Action(
  "TIK_TAK_BOOM",
  "UPDATE_CLOCK_IS_RUNNING"
);

export const setPlayers = Action("TIK_TAK_BOOM", "SET_PLAYERS");
export const setPlayerById = Action("TIK_TAK_BOOM", "SET_PLAYER_BY_ID");
export const removePlayerById = Action("TIK_TAK_BOOM", "REMOVE_PLAYER_BY_ID");
export const addPlayer = Action("TIK_TAK_BOOM", "ADD_PLAYER");
export const goToNextPlayer = Action("TIK_TAK_BOOM", "GO_TO_NEXT_PLAYER");
export const goToPreviousPlayer = Action(
  "TIK_TAK_BOOM",
  "GO_TO_PREVIOUS_PLAYER"
);
export const updatePlayers = Action("TIK_TAK_BOOM", "UPDATE_PLAYERS");

export const playersSetupSubmit = Action(
  "TIK_TAK_BOOM",
  "PLAYERS_SETUP_SUBMIT"
);

export const scoreSetupSubmit = Action("TIK_TAK_BOOM", "SCORE_SETUP_SUBMIT");

export const startRound = Action("TIK_TAK_BOOM", "START_ROUND");
export const endRound = Action("TIK_TAK_BOOM", "END_ROUND");
export const goToNextRound = Action("TIK_TAK_BOOM", "GO_TO_NEXT_ROUND");
export const restartGame = Action("TIK_TAK_BOOM", "RESTART_GAME");

export const updateGameReduxState = Action(
  "TIK_TAK_BOOM",
  "UPDATE_GAME_REDUX_STATE"
);

export const setWhoLost = Action("TIK_TAK_BOOM", "SET_WHO_LOST");

export const initializeGame = Action("TIK_TAK_BOOM", "INITIALIZE_GAME");

export const goBack = Action("TIK_TAK_BOOM", "GO_BACK");
