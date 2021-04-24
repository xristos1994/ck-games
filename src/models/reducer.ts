import { combineReducers } from "redux";
import { websiteReducer } from "./website";
import { tikTakBoomReducer } from "./tik-tak-boom";
import { clockReducer } from "./clock";
import { pantomimeReducer } from "./pantomime";

export const websiteRootReducer = combineReducers({
  ...websiteReducer,
  ...tikTakBoomReducer,
  ...clockReducer,
  ...pantomimeReducer,
});
