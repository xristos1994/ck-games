import { ITeam } from 'models/pantomime/interfaces';

export const createNewTeam: (id: ITeam['id']) => ITeam = (id) => {
  return {
    id,
    name: '',
    score: 0,
    playsNow: false,
    movieFound: false
  };
};
