import { IState } from "@models/interfaces";
import { IState as IModelState } from "./interfaces";

export const lang: (state: IState) => IModelState["lang"] = state =>
  state.websiteRootReducer.i18n.lang;
