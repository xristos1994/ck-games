import { startWebsite, updateSelectedGame } from "./actions";
import { IState } from "./interfaces";
import { IActionWithPayload } from "@core/actions/interfaces";

const initialState: IState = {
  websiteStarted: false,
  selectedGame: null,
};

const reducer = (
  state: IState = initialState,
  action: IActionWithPayload
): IState => {
  switch (action.type) {
    case startWebsite.type:
      return { ...state, websiteStarted: true };
    case updateSelectedGame.type:
      return { ...state, selectedGame: action.payload };
    default:
      return state;
  }
};

export const websiteReducer = {
  website: reducer,
};
