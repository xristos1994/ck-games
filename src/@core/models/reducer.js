import { combineReducers } from "redux";
import { coreReducer } from "./core";

export const coreRootReducer = combineReducers({ ...coreReducer });
