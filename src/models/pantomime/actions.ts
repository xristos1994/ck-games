import { Action } from "@core/actions";
import { IAction } from "@core/actions/interfaces";
import { noAction } from "@core/models/core/actions";
import { GameStates } from "./config";
import { IState, ITeam } from "./interfaces";

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

export const startPantomime: IAction = Action("@@", "START_PANTOMIME");

export const setGameState: IAction<GameStates> = Action<GameStates>(
  "PANTOMIME",
  "SET_GAME_STATE"
);
export const updateGameState: IAction<GameStates> = Action<GameStates>(
  "PANTOMIME",
  "UPDATE_GAME_STATE"
);

export const setScoreTarget: IAction<IState["scoreTarget"]> = Action<
  IState["scoreTarget"]
>("PANTOMIME", "SET_SCORE_TARGET");
export const updateScoreTarget: IAction<IState["scoreTarget"]> = Action<
  IState["scoreTarget"]
>("PANTOMIME", "UPDATE_SCORE_TARGET");

export const setAvailableTime: IAction<IState["availableTime"]> = Action<
  IState["availableTime"]
>("PANTOMIME", "SET_AVAILABLE_TIME");
export const updateAvailableTime: IAction<IState["availableTime"]> = Action<
  IState["availableTime"]
>("PANTOMIME", "UPDATE_AVAILABLE_TIME");

export const setTeams: IAction<IState["teams"]> = Action<IState["teams"]>(
  "PANTOMIME",
  "SET_TEAMS"
);
export const setTeamById: IAction<ITeam> = Action<ITeam>(
  "PANTOMIME",
  "SET_TEAM_BY_ID"
);
export const removeTeamById: IAction<ITeam> = Action<ITeam>(
  "PANTOMIME",
  "REMOVE_TEAM_BY_ID"
);
export const addTeam: IAction = Action("PANTOMIME", "ADD_TEAM");
export const goToNextTeam: IAction = Action("PANTOMIME", "GO_TO_NEXT_TEAM");

export const updateTeams: IAction<IState["teams"]> = Action<IState["teams"]>(
  "PANTOMIME",
  "UPDATE_TEAMS"
);

export const teamsSetupSubmit: IAction = Action(
  "PANTOMIME",
  "TEAMS_SETUP_SUBMIT"
);

export const scoreSetupSubmit: IAction = Action(
  "PANTOMIME",
  "SCORE_SETUP_SUBMIT"
);

export const availableTimeSetupSubmit: IAction = Action(
  "PANTOMIME",
  "AVAILABLE_TIME_SETUP_SUBMIT"
);

export const startRound: IAction = Action("PANTOMIME", "START_ROUND");
export const endRound: IAction = Action("PANTOMIME", "END_ROUND");
export const goToNextRound: IAction = Action("PANTOMIME", "GO_TO_NEXT_ROUND");
export const restartGame: IAction = Action("PANTOMIME", "RESTART_GAME");

export const updateMovie: IAction<IState["movie"]> = Action<IState["movie"]>(
  "PANTOMIME",
  "UPDATE_MOVIE"
);

export const updateGameReduxState: IAction<IState> = Action<IState>(
  "PANTOMIME",
  "UPDATE_GAME_REDUX_STATE"
);

export const setIfMovieFound: IAction<ITeam["movieFound"]> = Action<
  ITeam["movieFound"]
>("PANTOMIME", "SET_IF_MOVIE_FOUND");

export const initializeGame: IAction = Action("PANTOMIME", "INITIALIZE_GAME");

export const goBack: IAction = Action("TIK_TAK_BOOM", "GO_BACK");

export const updateSelectedMovieIndex: IAction<
  IState["selectedMovieIndex"]
> = Action<IState["selectedMovieIndex"]>(
  "PANTOMIME",
  "UPDATE_SELECTED_MOVIE_INDEX"
);
