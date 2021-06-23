import { startLayout, updateIsMenuOpen } from "./actions";
import { IState } from "./interfaces";
import { IActionWithPayload } from "@core/actions/interfaces";

const initialState: IState = {
  layoutStarted: false,
  isMenuOpen: false,
};

const reducer = (
  state: IState = initialState,
  action: IActionWithPayload
): IState => {
  switch (action.type) {
    case startLayout.type:
      return { ...state, layoutStarted: true };
    case updateIsMenuOpen.type:
      return { ...state, isMenuOpen: action.payload || false };
    default:
      return state;
  }
};

export const layoutReducer = {
  layout: reducer,
};
