import { IState as ICoreState } from './core/interfaces';

export interface IState {
  coreRootReducer: {
    core: ICoreState;
  };
}
