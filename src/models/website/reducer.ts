import { startWebsite, updateSelectedGame } from './actions';
import { IState } from './interfaces';
import { IAction } from '@core/actions/interfaces';

const initialState: IState = {
  websiteStarted: false,
  selectedGame: null
};

interface IReducer {
  (state: IState, action: IAction<IState['selectedGame']>): IState;
}

const reducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case startWebsite.type:
      return { ...state, websiteStarted: true };
    case updateSelectedGame.type:
      return { ...state, selectedGame: action.payload as IState['selectedGame'] };
    default:
      return state;
  }
};

export const websiteReducer = {
  website: reducer
};
