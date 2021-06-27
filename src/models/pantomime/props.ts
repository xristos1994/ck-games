import { GameStates, AvailableTimes, AvailableScoreTargets, Movies } from './config';
import { IState } from '@models/interfaces';
import { IState as IModelState, ITeam } from './interfaces';

export const pantomimeStarted: (state: IState) => IModelState['pantomimeStarted'] = (state) =>
  state.websiteRootReducer.pantomime.pantomimeStarted;

export const teams: (state: IState) => IModelState['teams'] = (state) => state.websiteRootReducer.pantomime.teams;

export const playerById: (state: IState) => (id: ITeam['id']) => ITeam | undefined = (state) => (id) =>
  teams(state).find((team) => team.id === id);

export const teamNameThatPlaysNow: (state: IState) => ITeam['name'] | null = (state) => {
  const team = teams(state).find((team) => team.playsNow);
  return team ? team.name : null;
};

export const gameState: (state: IState) => IModelState['gameState'] = (state) =>
  state.websiteRootReducer.pantomime.gameState;

export const movie: (state: IState) => IModelState['movie'] = (state) =>
  state.websiteRootReducer.pantomime.movie;

export const scoreTarget: (state: IState) => IModelState['scoreTarget'] = (state) =>
  state.websiteRootReducer.pantomime.scoreTarget;

export const isTeamsSetupValid: (state: IState) => boolean = (state) => {
  const _teams = teams(state);

  return !_teams.find((team) => team.name.trim().length === 0) && _teams.length >= 2;
};

export const canGoBack: (state: IState) => boolean = (state) => {
  const _gameState = gameState(state);
  const hasGameStarted = !!teams(state).find((team) => team.score > 0);
  return (
    _gameState === GameStates.setScoreTarget
    || _gameState === GameStates.setAvailableTime
    || (_gameState === GameStates.waitForRoundStart && !hasGameStarted)
  );
};

export const availableTimes: () => IModelState['availableTime'][] = () => AvailableTimes.allTimes;

export const availableScoreTargets: () => IModelState['scoreTarget'][] = () => AvailableScoreTargets.allScoreTargets;

export const availableTime: (state: IState) => IModelState['availableTime'] = (state) =>
  state.websiteRootReducer.pantomime.availableTime;

export const availableMovies: (state: IState) => [ IModelState['movie'], IModelState['movie'] ] = (state) => {
  const movies = Movies[state.websiteRootReducer.i18n.lang.code.toUpperCase()];
  const moviesLength = movies.length;
  const selectedMovieIndex = state.websiteRootReducer.pantomime.selectedMovieIndex;

  return [movies[selectedMovieIndex % moviesLength], movies[(selectedMovieIndex + 1) % moviesLength]];
};

export const selectedMovieIndex: (state: IState) => IModelState['selectedMovieIndex'] = (state) =>
  state.websiteRootReducer.pantomime.selectedMovieIndex;

