import { Action } from '@core/actions';
import { IAction } from '@core/actions/interfaces';
import { IState } from './interfaces';

export const startLayout: IAction = Action('LAYOUT', 'START_LAYOUT');

export const updateIsMenuOpen: IAction<IState['isMenuOpen']> = Action<
  IState['isMenuOpen']
>('LAYOUT', 'UPDATE_IS_MENU_OPEN');

export const setIsMenuOpen: IAction<IState['isMenuOpen']> = Action<
  IState['isMenuOpen']
>('LAYOUT', 'SET_IS_MENU_OPEN');
