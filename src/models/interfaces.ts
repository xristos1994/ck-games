import { IState as ITikTakBoomState } from "./tik-tak-boom/interfaces";

export interface IState {
  websiteRootReducer: {
    tikTakBoom: ITikTakBoomState;
  };
}
