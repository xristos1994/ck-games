import { combineEpics } from 'redux-observable';
import { coreEpic } from './core';

export const coreRootEpic = combineEpics(coreEpic);
