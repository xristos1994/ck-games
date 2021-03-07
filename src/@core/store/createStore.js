import { createEpicMiddleware, combineEpics } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReducer } from "./createReducer";
import { coreRootEpic } from "./../models";

const epicMiddleware = createEpicMiddleware();

const _createStore = () => {
  const store =
    process.env.NODE_ENV === "development"
      ? createStore(
          createReducer(),
          composeWithDevTools(applyMiddleware(epicMiddleware))
        )
      : createStore(createReducer(), applyMiddleware(epicMiddleware));
  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
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
