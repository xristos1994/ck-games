import { Observable, of } from "rxjs";
import { combineEpics } from "redux-observable";
import { IActionWithPayload } from "./../../@core/actions/interfaces"; //Alias "@core/actions/interfaces";
import { startWebsite } from "./actions";

const startEpic = (): Observable<IActionWithPayload> => of(startWebsite(null));

export const websiteEpic = combineEpics(startEpic);
