import { GameStates } from "./config";

export interface ITeam {
  id: number;
  name: string;
  playsNow: boolean | null;
  score: number;
  movieFound: boolean;
}

export type IScoreTarget = number;

export type AvailableTime = number;
export type IMovie = string;

export interface IState {
  pantomimeStarted: boolean;
  teams: ITeam[];
  gameState: GameStates;
  scoreTarget: IScoreTarget;
  availableTime: AvailableTime;
  movie: IMovie;
}
