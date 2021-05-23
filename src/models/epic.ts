import { combineEpics } from "redux-observable";
import { websiteEpic } from "./website";
import { tikTakBoomEpic } from "./tik-tak-boom";
import { clockEpic } from "./clock";
import { pantomimeEpic } from "./pantomime";
import { layoutEpic } from "./layout";

export const websiteRootEpic = combineEpics(
  websiteEpic,
  layoutEpic,
  tikTakBoomEpic,
  clockEpic,
  pantomimeEpic
);
