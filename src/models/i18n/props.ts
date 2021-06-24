import { IState } from '@models/interfaces';
import { IState as IModelState } from './interfaces';
import { availableLangs as _availableLangs } from './utils';

export const lang: (state: IState) => IModelState['lang'] = state =>
  state.websiteRootReducer.i18n.lang;

export const availableLangs: (state: IState) => IModelState['lang'][] = () =>
  Object.values(_availableLangs).reduce((acc:IModelState['lang'][], lang) => {
    if (acc.find(a => a.code === lang.code)) {
      return acc;
    }
    acc.push(lang);
    return acc;
  }, []);
