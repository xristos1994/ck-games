import { startLayout, updateIsMenuOpen } from './actions';
import { IState } from './interfaces';
import { IAction } from '@core/actions/interfaces';

export const initialState: IState = {
  layoutStarted: false,
  isMenuOpen: false
};

interface IReducer {
  (state: IState, action: IAction<IState['isMenuOpen']>): IState;
}

export const reducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case startLayout.type:
      return { ...state, layoutStarted: true };
    case updateIsMenuOpen.type:
      return { ...state, isMenuOpen: action.payload || false };
    default:
      return state;
  }
};

export const layoutReducer = {
  layout: reducer
};
