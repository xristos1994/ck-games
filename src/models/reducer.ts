import { combineReducers } from "redux";
import { websiteReducer } from "./website";
import { tikTakBoomReducer } from "./tik-tak-boom";
import { clockReducer } from "./clock";
import { pantomimeReducer } from "./pantomime";
import { layoutReducer } from "./layout";

export const websiteRootReducer = combineReducers({
  ...websiteReducer,
  ...layoutReducer,
  ...tikTakBoomReducer,
  ...clockReducer,
  ...pantomimeReducer,
});
