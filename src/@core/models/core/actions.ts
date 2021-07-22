import { Action } from './../../actions';
import { IActionCreator } from './../../actions/interfaces';

export const noAction: IActionCreator<void> = Action('CORE_GENERAL', 'NO_ACTION');

export const startCore: IActionCreator<void> = Action('@@', 'START_CORE');
