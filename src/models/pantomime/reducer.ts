import { IActionWithPayload } from "@core/actions/interfaces";
import {
  startPantomime,
  updateGameState,
  updateScoreTarget,
  updateAvailableTime,
  updateTeams,
  updateGameReduxState,
} from "./actions";
import { GameStates, AvailableTimes } from "./config";
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
  scoreTarget: 10,
  availableTime: AvailableTimes.default,
  movie: "",
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

    default:
      return state;
  }
};

export const pantomimeReducer = {
  pantomime: reducer,
};
