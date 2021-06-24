import { ITeam } from 'models/pantomime/interfaces';

export const assignNextTeam: (teams: ITeam[]) => ITeam[] = teams => {
  const idOfTeamThatPlaysNow = (teams.find(team => team.playsNow) || {}).id;

  const idOfTeamThatPlayesNext
    = idOfTeamThatPlaysNow === undefined
      ? 0
      : (idOfTeamThatPlaysNow + 1) % teams.length;

  const newTeams = teams.map((team, index) => ({
    ...team,
    playsNow: index === idOfTeamThatPlayesNext,
    movieFound: false
  }));
  return newTeams;
};
