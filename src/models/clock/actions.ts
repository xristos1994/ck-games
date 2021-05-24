import { Action } from "@core/actions";
import { IAction } from "@core/actions/interfaces";
import { IState } from "./interfaces";

export const startClock: IAction<IState["remainingTime"]> = Action<
  IState["remainingTime"]
>("CLOCK", "START_CLOCK");

export const reduceRemainingTime: IAction = Action(
  "CLOCK",
  "REDUCE_REMAINING_TIME"
);

export const updateRemainingTime: IAction<IState["remainingTime"]> = Action<
  IState["remainingTime"]
>("CLOCK", "UPDATE_REMAINING_TIME");

export const setClockIsRunning: IAction<IState["isRunning"]> = Action<
  IState["isRunning"]
>("CLOCK", "SET_CLOCK_IS_RUNNING");

export const updateClockIsRunning: IAction<IState["isRunning"]> = Action<
  IState["isRunning"]
>("CLOCK", "UPDATE_CLOCK_IS_RUNNING");

export const clockRemainingTimeBecameZero: IAction = Action(
  "CLOCK",
  "REMAINING_TIME_BECAME_ZERO"
);

export const clockTriggerTikTakSound: IAction = Action(
  "CLOCK",
  "TRIGGER_TIK_TAK_SOUND"
);

export const resetClock: IAction = Action("CLOCK", "RESET_CLOCK");
