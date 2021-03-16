import { startWebsite } from "./actions";
import { IState } from "./interfaces";
import { IActionWithPayload } from "@core/actions/interfaces";

const initialState: IState = {
  websiteStarted: false,
};

const reducer = (
  state: IState = initialState,
  action: IActionWithPayload
): IState => {
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
