import { createStore } from '@core/store';
import { websiteRootReducer, websiteRootEpic } from '@models';

const store = createStore();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
store.injectReducer('websiteRootReducer', websiteRootReducer);

store.runMiddlware(websiteRootEpic);

export { store };
