import { CombinedState, combineReducers, Reducer } from 'redux';
import { coreRootReducer } from './../models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createReducer = (asyncReducers?: Reducer): Reducer<CombinedState<any>, any> =>
  combineReducers({
    coreRootReducer,
    ...(asyncReducers || {})
  });
