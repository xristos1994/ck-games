import { Epic } from 'redux-observable';
import { AnyAction, Reducer, Store } from 'redux';

export interface IStore extends Store {
  injectReducer: {
    (key: string, reducer: Reducer): IStore;
  };
  asyncReducers?: Reducer<unknown, AnyAction>;
  runMiddlware: {
    (websiteRootEpic: Epic): void;
  };
}
