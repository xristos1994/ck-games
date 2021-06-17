import wrapWithProvider from "./wrap-with-provider";
import wrapWithLayout from "./wrap-with-layout";
import { availableLangs, getlangFromPathname } from "@models/i18n/utils";
import { updateLang } from "@models/i18n/actions";
import { getGameFromPathname } from "@models/website/utils";
import { updateSelectedGame } from "@models/website/actions";
import { store } from "@store";

export const onRenderBody = ({ pathname }) => {
  const lang =
    availableLangs[getlangFromPathname(pathname)] || availableLangs.default;
  store.dispatch(updateLang(lang));

  const game = getGameFromPathname(pathname) || null;
  store.dispatch(updateSelectedGame(game));
};

export const wrapRootElement = wrapWithProvider;
export const wrapPageElement = wrapWithLayout;
