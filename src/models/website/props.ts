import { IState } from "@models/interfaces";
import { IState as IModelState } from "./interfaces";

export const websiteStarted: (
  state: IState
) => IModelState["websiteStarted"] = state =>
  state.websiteRootReducer.website.websiteStarted;
