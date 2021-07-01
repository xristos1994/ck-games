import { combineEpics } from 'redux-observable';
import { websiteEpic } from './website';
import { tikTakBoomEpic } from './tik-tak-boom';
import { clockEpic } from './clock';
import { pantomimeEpic } from './pantomime';
import { layoutEpic } from './layout';
import { i18nEpic } from './i18n';
import { loggingEpic } from './logging';

export const websiteRootEpic = combineEpics(
  websiteEpic,
  layoutEpic,
  tikTakBoomEpic,
  clockEpic,
  pantomimeEpic,
  i18nEpic,
  loggingEpic
);
