import {
  startTikTakBoom,
  updateGameState,
  updateMode,
  updateSyllable,
  updateScoreTarget,
  updateRemainingTime,
  updateClockIsRunning,
  updatePlayers,
} from "./actions";
import { GameStates } from "./config";

// players = { name: string, isActive: boolean, playsNow: boolean, numOfBooms: number }[]
const initialState = {
  players: [],
  gameState: GameStates.setPlayers,
  mode: null,
  syllable: null,
  scoreTarget: 10,
  clock: {
    remainingTime: null,
    isRunning: false,
  },
};

const reducer = (
  state = { tikTakBoomStarted: false, ...initialState },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case startTikTakBoom.type:
      return { ...state, tikTakBoomStarted: true, ...initialState };

    case updateGameState.type:
      return { ...state, gameState: payload };

    case updateMode.type:
      return { ...state, mode: payload };

    case updateSyllable.type:
      return { ...state, syllable: payload };

    case updateScoreTarget.type:
      return { ...state, scoreTarget: payload };

    case updateRemainingTime.type:
      return { ...state, clock: { ...state.clock, remainingTime: payload } };

    case updateClockIsRunning.type:
      return { ...state, clock: { ...state.clock, isRunning: payload } };

    case updatePlayers.type:
      return { ...state, players: payload };

    default:
      return state;
  }
};

export const tikTakBoomReducer = {
  tikTakBoom: reducer,
};
