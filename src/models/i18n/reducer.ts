import { IAction } from '@core/actions/interfaces';
import { updateLang } from './actions';
import { IState } from './interfaces';
import { availableLangs } from './utils';

export const initialState: IState = {
  lang: availableLangs.default
};

interface IReducer {
  (state: IState, action: IAction<IState['lang']>): IState;
}

export const reducer: IReducer = (state = initialState, action) => {
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
