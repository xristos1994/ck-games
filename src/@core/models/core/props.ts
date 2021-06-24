import { IState } from './../interfaces';
import { IState as IModelState } from './interfaces';

export const coreStarted: (
  state: IState
) => IModelState['coreStarted'] = state =>
  state.coreRootReducer.core.coreStarted;
