import { startWebsite } from "./actions";

const reducer = (state = { websiteStarted: false }, action) => {
  switch (action.type) {
    case startWebsite.type:
      return { ...state, websiteStarted: true };
    default:
      return state;
  }
};

export const websiteReducer = {
  website: reducer,
};
