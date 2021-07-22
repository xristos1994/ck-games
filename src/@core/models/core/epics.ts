import { Observable, of } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { IAction } from './../../actions/interfaces';
import { startCore } from './actions';

const startEpic = (): Observable<IAction> => of(startCore());

export const coreEpic = combineEpics(startEpic);
