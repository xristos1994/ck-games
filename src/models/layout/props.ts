import { IState } from '@models/interfaces';
import { IState as IModelState } from './interfaces';

export const layoutStarted: (state: IState) => IModelState['layoutStarted'] = (state) =>
  state.websiteRootReducer.layout.layoutStarted;

export const isMenuOpen: (state: IState) => IModelState['isMenuOpen'] = (state) =>
  state.websiteRootReducer.layout.isMenuOpen;
