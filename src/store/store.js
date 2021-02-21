import { createStore } from "./../@core/store";
import { websiteRootReducer, websiteRootEpic } from "./../models";

const store = createStore();
store.injectReducer("websiteRootReducer", websiteRootReducer);

store.runMiddlware(websiteRootEpic);

export { store };
