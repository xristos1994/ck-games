import { IActionWithPayload } from "@core/actions/interfaces";
import {
  startPantomime,
  updateGameState,
  updateScoreTarget,
  updateAvailableTime,
  updateTeams,
  updateGameReduxState,
  updateMovie,
  updateSelectedMovieIndex,
  updateAvailableMovies,
} from "./actions";
import { GameStates, AvailableTimes, AvailableScoreTargets } from "./config";
import { IState } from "./interfaces";

const initialState: IState = {
  pantomimeStarted: false,
  teams: [
    {
      id: 0,
      name: "",
      playsNow: false,
      score: 0,
      movieFound: false,
    },
    {
      id: 1,
      name: "",
      playsNow: false,
      score: 0,
      movieFound: false,
    },
  ],
  gameState: GameStates.setTeams,
  scoreTarget: AvailableScoreTargets.default,
  availableTime: AvailableTimes.default,
  movie: "",
  selectedMovieIndex: -2,
  availableMovies: ["", ""],
};

const reducer = (
  state: IState = initialState,
  action: IActionWithPayload
): IState => {
  const { type, payload } = action;

  switch (type) {
    case updateGameReduxState.type:
      return payload;

    case startPantomime.type:
      return { ...state, pantomimeStarted: true, ...initialState };

    case updateGameState.type:
      return { ...state, gameState: payload };

    case updateScoreTarget.type:
      return { ...state, scoreTarget: payload };

    case updateAvailableTime.type:
      return { ...state, availableTime: payload };

    case updateTeams.type:
      return { ...state, teams: payload };

    case updateMovie.type:
      return { ...state, movie: payload };

    case updateSelectedMovieIndex.type:
      return { ...state, selectedMovieIndex: payload };

    case updateAvailableMovies.type:
      return { ...state, availableMovies: payload };

    default:
      return state;
  }
};

export const pantomimeReducer = {
  pantomime: reducer,
};
