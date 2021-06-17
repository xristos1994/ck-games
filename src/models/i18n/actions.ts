import { Action } from "@core/actions";
import { IAction } from "@core/actions/interfaces";
import { ILang } from "./interfaces";

export const initI18n: IAction = Action("@@", "INIT_I18N");

export const updateLang: IAction<ILang> = Action<ILang>("I18N", "UPDATE_LANG");

export const setLang: IAction<ILang> = Action<ILang>("I18N", "SET_LANG");
