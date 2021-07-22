import { startCore } from './actions';
import { IState } from './interfaces';
import { IAction } from './../../actions/interfaces';

export const initialState: IState = {
  coreStarted: false
};

interface IReducer {
  (state: IState, action: IAction): IState;
}

export const reducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case startCore.type:
      return { ...state, coreStarted: true };
    default:
      return state;
  }
};

export const coreReducer = {
  core: reducer
};
