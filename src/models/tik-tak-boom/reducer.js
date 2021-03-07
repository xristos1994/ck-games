import {
  startTikTakBoom,
  updateGameState,
  updateMode,
  updateSyllable,
  updateScoreTarget,
  updateRemainingTime,
  updateClockIsRunning,
  updatePlayers,
  updateGameReduxState,
} from "./actions";
import { GameStates } from "./config";

// players = { id: number, name: string, isActive: boolean, playsNow: boolean, numOfBooms: number }[]
const initialState = {
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
  scoreTarget: 10,
  clock: {
    remainingTime: null,
    isRunning: false,
  },
};

// const initialState = {
//   tikTakBoomStarted: true,
//   players: [
//     {
//       id: 0,
//       name: "dafa",
//       isActive: true,
//       playsNow: true,
//       startsRound: true,
//       numOfBooms: 0,
//     },
//     {
//       id: 1,
//       name: "fff",
//       isActive: true,
//       playsNow: false,
//       startsRound: false,
//       numOfBooms: 0,
//     },
//   ],
//   gameState: "roundInProgress",
//   mode: {
//     id: "tak",
//     name: "...Tak",
//     description: "Word must ends with syllable",
//   },
//   syllable: "ΤΡΩ",
//   scoreTarget: 10,
//   clock: {
//     remainingTime: 0,
//     isRunning: true,
//   },
// };

const reducer = (
  state = { tikTakBoomStarted: false, ...initialState },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case updateGameReduxState.type:
      return payload;

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
