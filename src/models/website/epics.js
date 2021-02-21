import { of } from "rxjs";
import { combineEpics } from "redux-observable";
import { startWebsite } from "./actions";

const startEpic = () => of(startWebsite());

export const websiteEpic = combineEpics(startEpic);
