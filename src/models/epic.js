import { combineEpics } from "redux-observable";
import { websiteEpic } from "./website";

export const websiteRootEpic = combineEpics(websiteEpic);
