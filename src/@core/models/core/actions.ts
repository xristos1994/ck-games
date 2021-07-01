import { Action } from './../../actions';
import { IAction } from './../../actions/interfaces';

export const noAction: IAction = Action('CORE_GENERAL', 'NO_ACTION');

export const startCore: IAction = Action('@@', 'START_CORE');
