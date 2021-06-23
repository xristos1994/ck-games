import { GameStates } from "./config";

export interface ITeam {
  id: number;
  name: string;
  playsNow: boolean | null;
  score: number;
  movieFound: boolean | null;
}

export type IScoreTarget = number;

export type AvailableTime = number;
export type IMovie = string;
export type AvailableMovies = [IMovie, IMovie];

export interface IState {
  pantomimeStarted: boolean;
  teams: ITeam[];
  gameState: GameStates;
  scoreTarget: IScoreTarget;
  availableTime: AvailableTime;
  movie: IMovie;
  selectedMovieIndex: number;
  availableMovies: AvailableMovies;
}
