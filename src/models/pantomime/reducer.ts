import { IAction } from '@core/actions/interfaces';
import {
  startPantomime,
  updateGameState,
  updateScoreTarget,
  updateAvailableTime,
  updateTeams,
  updateGameReduxState,
  updateMovie,
  updateSelectedMovieIndex
} from './actions';
import { GameStates, AvailableTimes, AvailableScoreTargets } from './config';
import { IState } from './interfaces';

const initialState: IState = {
  pantomimeStarted: false,
  teams: [
    {
      id: 0,
      name: '',
      playsNow: false,
      score: 0,
      movieFound: false
    },
    {
      id: 1,
      name: '',
      playsNow: false,
      score: 0,
      movieFound: false
    }
  ],
  gameState: GameStates.setTeams,
  scoreTarget: AvailableScoreTargets.default,
  availableTime: AvailableTimes.default,
  movie: '',
  selectedMovieIndex: -2
};

interface IReducer {
  (
    state: IState,
    action: IAction<
      IState | IState['gameState' | 'scoreTarget' | 'availableTime' | 'teams' | 'movie' | 'selectedMovieIndex']
    >
  ): IState;
}

const reducer: IReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case updateGameReduxState.type:
      return payload as IState;

    case startPantomime.type:
      return { ...state, ...initialState, pantomimeStarted: true };

    case updateGameState.type:
      return { ...state, gameState: payload as IState['gameState'] };

    case updateScoreTarget.type:
      return { ...state, scoreTarget: payload as IState['scoreTarget'] };

    case updateAvailableTime.type:
      return { ...state, availableTime: payload as IState['availableTime'] };

    case updateTeams.type:
      return { ...state, teams: payload as IState['teams'] };

    case updateMovie.type:
      return { ...state, movie: payload as IState['movie'] };

    case updateSelectedMovieIndex.type:
      return { ...state, selectedMovieIndex: payload as IState['selectedMovieIndex'] };

    default:
      return state;
  }
};

export const pantomimeReducer = {
  pantomime: reducer
};
