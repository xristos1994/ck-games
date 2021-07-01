import { Action, Actions } from '@core/actions';
import { IAction, IActions } from '@core/actions/interfaces';
import { ILoggingPayload } from './interfaces';

export const startLogging: IAction = Action('LOGGING', 'START_LOGGING');

export const log: IActions<ILoggingPayload, unknown, unknown> = Actions('LOGGING', 'LOG');
