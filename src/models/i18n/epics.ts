import { Observable, of } from "rxjs";
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable,
} from "redux-observable";
import { map } from "rxjs/operators";
import { updateLang, setLang, initI18n } from "./actions";

import { IState } from "@models/interfaces";
import { IActionWithPayload } from "@core/actions/interfaces";
import { IState as IModelState } from "./interfaces";
import {
  availableLangs,
  setLocalStorageLang,
  getLocalStorageLang,
  getlangFromPathname,
} from "./utils";

const startEpic = (): Observable<IActionWithPayload> => of(initI18n(null));

const initI18nEpic = (
  action$: ActionsObservable<IActionWithPayload>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState["lang"]>> => {
  return action$.pipe(
    ofType(initI18n.type),
    map(() => {
      const langInLocalStorage = getlangFromPathname() || getLocalStorageLang();
      const selectedLang =
        availableLangs[langInLocalStorage] || availableLangs.default;

      return setLang(selectedLang);
    })
  );
};

const setLangEpic = (
  action$: ActionsObservable<IActionWithPayload<IModelState["lang"]>>,
  state$: StateObservable<IState>
): Observable<IActionWithPayload<IModelState["lang"]>> => {
  return action$.pipe(
    ofType(setLang.type),
    map(action => {
      setLocalStorageLang(action.payload.code);
      return updateLang(action.payload);
    })
  );
};

export const i18nEpic = combineEpics(startEpic, initI18nEpic, setLangEpic);
