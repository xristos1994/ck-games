import { combineReducers } from "redux";
import { websiteReducer } from "./website";

export const websiteRootReducer = combineReducers({
  ...websiteReducer,
});
