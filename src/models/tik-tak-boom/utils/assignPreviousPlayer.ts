import { IPlayer } from "./../interfaces";

export const assignPreviousPlayer: (
  players: IPlayer[]
) => IPlayer[] = players => {
  const idOfPlayerThatPlaysNow = (players.find(player => player.playsNow) || {})
    .id;

  const numOfPlayers = players.length;
  for (
    let i = idOfPlayerThatPlaysNow - 1;
    i > idOfPlayerThatPlaysNow - numOfPlayers;
    i--
  ) {
    const j = i < 0 ? -1 * (i + 2 - numOfPlayers) : i;
    const playerShouldPlayNow = players[j % numOfPlayers];
    if (playerShouldPlayNow.isActive) {
      return players.map(player => {
        return player.id === playerShouldPlayNow.id
          ? { ...playerShouldPlayNow, playsNow: true }
          : { ...player, playsNow: false };
      });
    }
  }

  return players;
};
