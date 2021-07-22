import { Action } from '@core/actions';
import { IActionCreator } from '@core/actions/interfaces';
import { IState } from './interfaces';

export const startLayout: IActionCreator<void> = Action('LAYOUT', 'START_LAYOUT');

export const updateIsMenuOpen: IActionCreator<IState['isMenuOpen']> = Action<IState['isMenuOpen']>(
  'LAYOUT',
  'UPDATE_IS_MENU_OPEN'
);

export const setIsMenuOpen: IActionCreator<IState['isMenuOpen']> = Action<IState['isMenuOpen']>(
  'LAYOUT',
  'SET_IS_MENU_OPEN'
);
