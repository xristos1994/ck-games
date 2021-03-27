import { combineEpics } from "redux-observable";
import { websiteEpic } from "./website";
import { tikTakBoomEpic } from "./tik-tak-boom";
import { clockEpic } from "./clock";
import { pantomimeEpic } from "./pantomime";

export const websiteRootEpic = combineEpics(
  websiteEpic,
  tikTakBoomEpic,
  clockEpic,
  pantomimeEpic
);
