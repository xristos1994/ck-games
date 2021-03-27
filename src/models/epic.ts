import { combineEpics } from "redux-observable";
import { websiteEpic } from "./website";
import { tikTakBoomEpic } from "./tik-tak-boom";
import { clockEpic } from "./clock";

export const websiteRootEpic = combineEpics(
  websiteEpic,
  tikTakBoomEpic,
  clockEpic
);
