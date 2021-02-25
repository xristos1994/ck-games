import { Action } from "@core/actions";

export const startTikTakBoom = Action("@@", "START_TIK_TAK_BOOM");

export const setGameState = Action("TIK_TAK_BOOM", "SET_GAME_STATE");
export const updateGameState = Action("TIK_TAK_BOOM", "UPDATE_GAME_STATE");

export const setMode = Action("TIK_TAK_BOOM", "SET_MODE");
export const updateMode = Action("TIK_TAK_BOOM", "UPDATE_MODE");

export const setSyllable = Action("TIK_TAK_BOOM", "SET_SYLLABLE");
export const updateSyllable = Action("TIK_TAK_BOOM", "UPDATE_SYLLABLE");

export const setScoreTarget = Action("TIK_TAK_BOOM", "SET_SCORE_TARGET");
export const updateScoreTarget = Action("TIK_TAK_BOOM", "UPDATE_SCORE_TARGET");

export const setRemainingTime = Action("TIK_TAK_BOOM", "SET_REMAINING_TIME");
export const updateRemainingTime = Action(
  "TIK_TAK_BOOM",
  "UPDATE_REMAINING_TIME"
);

export const initializeClock = Action("TIK_TAK_BOOM", "INITIALIZE_CLOCK");

export const startClock = Action("TIK_TAK_BOOM", "START_CLOCK");
export const stopClock = Action("TIK_TAK_BOOM", "STOP_CLOCK");
export const updateClockIsRunning = Action(
  "TIK_TAK_BOOM",
  "UPDATE_CLOCK_IS_RUNNING"
);

export const setPlayers = Action("TIK_TAK_BOOM", "SET_PLAYERS");
export const goToNextPlayer = Action("TIK_TAK_BOOM", "GO_TO_NEXT_PLAYER");
export const goToPreviousPlayer = Action(
  "TIK_TAK_BOOM",
  "GO_TO_PREVIOUS_PLAYER"
);
export const updatePlayers = Action("TIK_TAK_BOOM", "UPDATE_PLAYERS");
