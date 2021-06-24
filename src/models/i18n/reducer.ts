import { IActionWithPayload } from '@core/actions/interfaces';
import { updateLang } from './actions';
import { IState } from './interfaces';
import { availableLangs } from './utils';

const initialState: IState = {
  lang: availableLangs.default
};

const reducer = (
  state: IState = initialState,
  action: IActionWithPayload
): IState => {
  const { type, payload } = action;

  switch (type) {
    case updateLang.type:
      return { ...state, lang: payload || availableLangs.default };
    default:
      return state;
  }
};

export const i18nReducer = {
  i18n: reducer
};
