import { ITeam } from "@models/pantomime/interfaces";

export const assignIfMovieFound: (
  teams: ITeam[],
  movieFound: ITeam["movieFound"]
) => ITeam[] = (teams, movieFound) => {
  return teams.map(team => ({
    ...team,
    movieFound: team.playsNow && movieFound,
  }));
};
