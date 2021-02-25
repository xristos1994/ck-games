import { combineReducers } from "redux";
import { websiteReducer } from "./website";
import { tikTakBoomReducer } from "./tik-tak-boom";

export const websiteRootReducer = combineReducers({
  ...websiteReducer,
  ...tikTakBoomReducer,
});
