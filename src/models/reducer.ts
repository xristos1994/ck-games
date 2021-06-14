import { combineReducers } from "redux";
import { websiteReducer } from "./website";
import { tikTakBoomReducer } from "./tik-tak-boom";
import { clockReducer } from "./clock";
import { pantomimeReducer } from "./pantomime";
import { layoutReducer } from "./layout";
import { i18nReducer } from "./i18n";

export const websiteRootReducer = combineReducers({
  ...websiteReducer,
  ...layoutReducer,
  ...tikTakBoomReducer,
  ...clockReducer,
  ...pantomimeReducer,
  ...i18nReducer,
});
