import { IActionWithPayload } from "@core/actions/interfaces";
import {
  startTikTakBoom,
  updateGameState,
  updateMode,
  updateSyllable,
  updateScoreTarget,
  updatePlayers,
  updateGameReduxState,
} from "./actions";
import { GameStates, AvailableScoreTargets } from "./config";
import { IState } from "./interfaces";

const initialState: IState = {
  tikTakBoomStarted: false,
  players: [
    {
      id: 0,
      name: "",
      isActive: true,
      playsNow: null,
      startsRound: null,
      numOfBooms: 0,
    },
    {
      id: 1,
      name: "",
      isActive: true,
      playsNow: null,
      startsRound: null,
      numOfBooms: 0,
    },
  ],
  gameState: GameStates.setPlayers,
  mode: null,
  syllable: null,
  scoreTarget: AvailableScoreTargets.default,
};

const reducer = (
  state: IState = initialState,
  action: IActionWithPayload
): IState => {
  const { type, payload } = action;

  switch (type) {
    case updateGameReduxState.type:
      return payload;

    case startTikTakBoom.type:
      return { ...state, ...initialState, tikTakBoomStarted: true };

    case updateGameState.type:
      return { ...state, gameState: payload };

    case updateMode.type:
      return { ...state, mode: payload };

    case updateSyllable.type:
      return { ...state, syllable: payload };

    case updateScoreTarget.type:
      return { ...state, scoreTarget: payload };

    case updatePlayers.type:
      return { ...state, players: payload };

    default:
      return state;
  }
};

export const tikTakBoomReducer = {
  tikTakBoom: reducer,
};
