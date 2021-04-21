import { ITeam } from "@models/pantomime/interfaces";

export const assignIfMovieFound: (
  teams: ITeam[],
  movieFound: ITeam["movieFound"],
  shouldReduceScore: boolean
) => ITeam[] = (teams, movieFound, shouldReduceScore) => {
  return teams.map(team => ({
    ...team,
    movieFound: team.playsNow && movieFound,
    score: team.playsNow
      ? team.score - (shouldReduceScore ? 1 : 0) + (movieFound ? 1 : 0)
      : team.score,
  }));
};
