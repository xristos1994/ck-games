import { Epic } from "redux-observable";
import { Reducer, Store } from "redux";

export interface IStore extends Store {
  injectReducer: {
    (key: string, reducer: Reducer): IStore;
  };
  asyncReducers: any;
  runMiddlware: {
    (websiteRootEpic: Epic): void;
  };
}
