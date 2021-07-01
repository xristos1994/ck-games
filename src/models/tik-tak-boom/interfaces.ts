import { GameStates } from './config';
import { IMode as IModeObj } from './config/interfaces';

export interface IPlayer {
  id: number;
  name: string;
  isActive: boolean;
  playsNow: boolean | null;
  startsRound: boolean | null;
  numOfBooms: number;
}

export type ISyllable = string | null;

export type IScoreTarget = number;

export type IMode = IModeObj | null;
export interface IState {
  tikTakBoomStarted: boolean;
  players: IPlayer[];
  gameState: GameStates;
  mode: IMode;
  syllable: ISyllable;
  scoreTarget: IScoreTarget;
}
