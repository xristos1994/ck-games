import { Action } from '@core/actions';
import { IActionCreator } from '@core/actions/interfaces';
import { noAction } from '@core/models/core/actions';
import { GameStates } from './config';
import { IState, ITeam } from './interfaces';

import { startClock, resetClock, clockRemainingTimeBecameZero, clockTriggerTikTakSound } from '@models/clock/actions';

export { noAction, startClock, resetClock, clockRemainingTimeBecameZero, clockTriggerTikTakSound };

export const startPantomime: IActionCreator<void> = Action('@@', 'START_PANTOMIME');

export const setGameState: IActionCreator<GameStates> = Action<GameStates>('PANTOMIME', 'SET_GAME_STATE');
export const updateGameState: IActionCreator<GameStates> = Action<GameStates>('PANTOMIME', 'UPDATE_GAME_STATE');

export const setScoreTarget: IActionCreator<IState['scoreTarget']> = Action<IState['scoreTarget']>(
  'PANTOMIME',
  'SET_SCORE_TARGET'
);
export const updateScoreTarget: IActionCreator<IState['scoreTarget']> = Action<IState['scoreTarget']>(
  'PANTOMIME',
  'UPDATE_SCORE_TARGET'
);

export const setAvailableTime: IActionCreator<IState['availableTime']> = Action<IState['availableTime']>(
  'PANTOMIME',
  'SET_AVAILABLE_TIME'
);
export const updateAvailableTime: IActionCreator<IState['availableTime']> = Action<IState['availableTime']>(
  'PANTOMIME',
  'UPDATE_AVAILABLE_TIME'
);

export const setTeams: IActionCreator<IState['teams']> = Action<IState['teams']>('PANTOMIME', 'SET_TEAMS');
export const setTeamById: IActionCreator<ITeam> = Action<ITeam>('PANTOMIME', 'SET_TEAM_BY_ID');
export const removeTeamById: IActionCreator<ITeam> = Action<ITeam>('PANTOMIME', 'REMOVE_TEAM_BY_ID');
export const addTeam: IActionCreator<void> = Action('PANTOMIME', 'ADD_TEAM');
export const goToNextTeam: IActionCreator<void> = Action('PANTOMIME', 'GO_TO_NEXT_TEAM');

export const updateTeams: IActionCreator<IState['teams']> = Action<IState['teams']>('PANTOMIME', 'UPDATE_TEAMS');

export const teamsSetupSubmit: IActionCreator<void> = Action('PANTOMIME', 'TEAMS_SETUP_SUBMIT');

export const scoreSetupSubmit: IActionCreator<void> = Action('PANTOMIME', 'SCORE_SETUP_SUBMIT');

export const availableTimeSetupSubmit: IActionCreator<void> = Action('PANTOMIME', 'AVAILABLE_TIME_SETUP_SUBMIT');

export const startRound: IActionCreator<void> = Action('PANTOMIME', 'START_ROUND');
export const endRound: IActionCreator<void> = Action('PANTOMIME', 'END_ROUND');
export const goToNextRound: IActionCreator<void> = Action('PANTOMIME', 'GO_TO_NEXT_ROUND');
export const restartGame: IActionCreator<void> = Action('PANTOMIME', 'RESTART_GAME');

export const setMovie: IActionCreator<IState['movie']> = Action<IState['movie']>('PANTOMIME', 'SET_MOVIE');
export const updateMovie: IActionCreator<IState['movie']> = Action<IState['movie']>('PANTOMIME', 'UPDATE_MOVIE');

export const updateGameReduxState: IActionCreator<IState> = Action<IState>('PANTOMIME', 'UPDATE_GAME_REDUX_STATE');

export const setIfMovieFound: IActionCreator<ITeam['movieFound']> = Action<ITeam['movieFound']>(
  'PANTOMIME',
  'SET_IF_MOVIE_FOUND'
);

export const initializeGame: IActionCreator<void> = Action('PANTOMIME', 'INITIALIZE_GAME');

export const goBack: IActionCreator<void> = Action('TIK_TAK_BOOM', 'GO_BACK');

export const updateSelectedMovieIndex: IActionCreator<IState['selectedMovieIndex']> = Action<
  IState['selectedMovieIndex']
>('PANTOMIME', 'UPDATE_SELECTED_MOVIE_INDEX');
