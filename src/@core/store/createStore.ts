import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, applyMiddleware, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IStore } from './interfaces';
import { createReducer } from './createReducer';
import { coreRootEpic } from './../models';

const epicMiddleware = createEpicMiddleware();

const _createStore = (): IStore => {
  const store = (process.env.NODE_ENV === 'development'
    ? createStore(
      createReducer(),
      composeWithDevTools(applyMiddleware(epicMiddleware))
    )
    : createStore(createReducer(), applyMiddleware(epicMiddleware))) as IStore;

  store.asyncReducers = {} as Reducer;
  store.injectReducer = (key: string, reducer: Reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };
  store.runMiddlware = websiteRootEpic => {
    epicMiddleware.run(combineEpics(coreRootEpic, websiteRootEpic));
  };

  return store;
};

export { _createStore as createStore };
