import { combineEpics } from "redux-observable";
import { websiteEpic } from "./website";
import { tikTakBoomEpic } from "./tik-tak-boom";

export const websiteRootEpic = combineEpics(websiteEpic, tikTakBoomEpic);
