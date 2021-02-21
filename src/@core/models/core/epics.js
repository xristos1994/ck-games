import { of } from "rxjs";
import { combineEpics } from "redux-observable";
import { startCore } from "./actions";

const startEpic = () => of(startCore());

export const coreEpic = combineEpics(startEpic);
