import { IState as ITikTakBoomState } from "./tik-tak-boom/interfaces";
import { IState as IWebsiteState } from "./website/interfaces";
import { IState as IClockState } from "./clock/interfaces";
import { IState as IPantomimeState } from "./pantomime/interfaces";
import { IState as ILayoutState } from "./layout/interfaces";

export interface IState {
  websiteRootReducer: {
    tikTakBoom: ITikTakBoomState;
    website: IWebsiteState;
    layout: ILayoutState;
    clock: IClockState;
    pantomime: IPantomimeState;
  };
}
