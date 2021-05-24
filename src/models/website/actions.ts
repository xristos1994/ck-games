import { Action } from "@core/actions";
import { IAction } from "@core/actions/interfaces";
import { IState } from "./interfaces";

export const startWebsite: IAction = Action("@@", "START_WEBSITE");

export const updateSelectedGame: IAction<IState["selectedGame"]> = Action<
  IState["selectedGame"]
>("@@", "UPDATE_SELECTED_GAME");

export const restartAllGames: IAction = Action("@@", "RESTART_ALL_GAMES");
