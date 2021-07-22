import { Action } from '@core/actions';
import { IActionCreator } from '@core/actions/interfaces';
import { IState } from './interfaces';

export const startWebsite: IActionCreator<void> = Action('@@', 'START_WEBSITE');

export const updateSelectedGame: IActionCreator<IState['selectedGame']> = Action<IState['selectedGame']>(
  '@@',
  'UPDATE_SELECTED_GAME'
);

export const restartAllGames: IActionCreator<void> = Action('@@', 'RESTART_ALL_GAMES');
