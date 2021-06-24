import { IPlayer } from '@models/tik-tak-boom/interfaces';

export const assignWhoLost: (
  players: IPlayer[],
  playerLostId: IPlayer['id']
) => IPlayer[] = (players, playerLostId) => {
  const activePlayers = players.filter(player => player.isActive);
  return players.map(player => {
    if (player.playsNow) {
      return {
        ...player,
        playsNow: false,
        isActive: true,
        numOfBooms: player.numOfBooms + Number(activePlayers.length === 1)
      };
    } else if (player.id === playerLostId) {
      return {
        ...player,
        playsNow: true,
        isActive: false,
        numOfBooms: player.numOfBooms - Number(activePlayers.length === 1)
      };
    }
    return player;
  });
};
