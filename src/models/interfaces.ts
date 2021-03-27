import { IState as ITikTakBoomState } from "./tik-tak-boom/interfaces";
import { IState as IWebsiteState } from "./website/interfaces";
import { IState as IClockState } from "./clock/interfaces";

export interface IState {
  websiteRootReducer: {
    tikTakBoom: ITikTakBoomState;
    website: IWebsiteState;
    clock: IClockState;
  };
}
