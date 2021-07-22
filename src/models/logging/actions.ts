import { Action, Actions } from '@core/actions';
import { IActionCreator, IActionsCreator } from '@core/actions/interfaces';
import { ILoggingPayload } from './interfaces';

export const startLogging: IActionCreator<void> = Action('LOGGING', 'START_LOGGING');

export const log: IActionsCreator<ILoggingPayload, unknown, unknown> = Actions('LOGGING', 'LOG');
