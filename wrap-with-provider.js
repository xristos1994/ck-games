/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Provider } from 'react-redux';
import { availableLangs, getlangFromPathname } from '@models/i18n/utils';
import { updateLang } from '@models/i18n/actions';
import { getGameFromPathname } from '@models/website/utils';
import { updateSelectedGame } from '@models/website/actions';
import { store } from '@store';

const wrapWithProvider = ({ element, pathname }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  const lang = availableLangs[getlangFromPathname(pathname)] || availableLangs.default;
  store.dispatch(updateLang(lang));

  const game = getGameFromPathname(pathname) || null;
  store.dispatch(updateSelectedGame(game));

  return <Provider store={store}>{element}</Provider>;
};

export default wrapWithProvider;
