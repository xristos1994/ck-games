import { IState } from "../../models/interfaces"; //Alias "@models/interfaces";
import { IState as IModelState } from "./interfaces";

export const websiteStarted: (
  state: IState
) => IModelState["websiteStarted"] = state =>
  state.websiteRootReducer.website.websiteStarted;
