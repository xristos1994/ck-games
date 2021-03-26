import { combineReducers, Reducer } from "redux";
import { coreRootReducer } from "./../models";

export const createReducer = (asyncReducers?: Reducer): Reducer =>
  combineReducers({
    coreRootReducer,
    ...(asyncReducers || {}),
  });
