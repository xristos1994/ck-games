import { startCore } from "./actions";

const reducer = (state = { coreStarted: false }, action) => {
  switch (action.type) {
    case startCore.type:
      return { ...state, coreStarted: true };
    default:
      return state;
  }
};

export const coreReducer = {
  core: reducer,
};
