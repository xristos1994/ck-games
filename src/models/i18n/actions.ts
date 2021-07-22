import { Action } from '@core/actions';
import { IActionCreator } from '@core/actions/interfaces';
import { ILang } from './interfaces';

export const initI18n: IActionCreator<void> = Action('@@', 'INIT_I18N');

export const updateLang: IActionCreator<ILang> = Action<ILang>('I18N', 'UPDATE_LANG');

export const setLang: IActionCreator<ILang> = Action<ILang>('I18N', 'SET_LANG');
