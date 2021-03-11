import { GameStates } from "./config";

export interface IPlayer {
  id: number;
  name: string;
  isActive: boolean;
  playsNow: boolean | null;
  startsRound: boolean | null;
  numOfBooms: number;
}

export interface IClock {
  remainingTime: number | null;
  isRunning: boolean;
}

export interface IState {
  tikTakBoomStarted: boolean;
  players: IPlayer[];
  gameState: GameStates;
  mode: string | null;
  syllable: string | null;
  scoreTarget: number;
  clock: IClock;
}

export type ISyllable = string;

export type IScoreTarget = string;

export type IRemainingTime = number;

export type IIsClockRunning = boolean;
