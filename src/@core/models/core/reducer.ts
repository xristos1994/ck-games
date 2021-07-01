import { startCore } from './actions';
import { IState } from './interfaces';
import { IActionWithPayload } from './../../actions/interfaces';

const initialState: IState = {
  coreStarted: false
};

const reducer = (state: IState = initialState, action: IActionWithPayload): IState => {
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
