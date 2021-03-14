import { createStore } from "./../@core/store"; // Alias "@core/store";
import { websiteRootReducer, websiteRootEpic } from "./../models"; // Alias "@models";

const store = createStore();
store.injectReducer("websiteRootReducer", websiteRootReducer);

store.runMiddlware(websiteRootEpic);

export { store };
