import { AvailableGames } from './../interfaces';

export const getGameFromPathname = (pathname?: string): string => {
  let tempPathname = pathname || '';

  if (typeof window !== 'undefined') {
    tempPathname = window.location.pathname;
  }

  const pathNameParams = tempPathname.split('/');

  if (pathNameParams.includes(AvailableGames.pantomime)) {
    return AvailableGames.pantomime;
  }

  if (pathNameParams.includes(AvailableGames.tikTakBoom)) {
    return AvailableGames.tikTakBoom;
  }

  return '';
};
