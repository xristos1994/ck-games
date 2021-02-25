import { of } from "rxjs";
import { combineEpics } from "redux-observable";
import { startTikTakBoom } from "./actions";

const startEpic = () => of(startTikTakBoom());

export const tikTakBoomEpic = combineEpics(startEpic);