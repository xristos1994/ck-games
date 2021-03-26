import { Observable, of } from "rxjs";
import { combineEpics } from "redux-observable";
import { IActionWithPayload } from "./../../actions/interfaces";
import { startCore } from "./actions";

const startEpic = (): Observable<IActionWithPayload> => of(startCore(null));

export const coreEpic = combineEpics(startEpic);
