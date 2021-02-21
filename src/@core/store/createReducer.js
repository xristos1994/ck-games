import { combineReducers } from "redux";
import { coreRootReducer } from "./../models";

export const createReducer = (asyncReducers = {}) =>
  combineReducers({
    coreRootReducer,
    ...asyncReducers,
  });
