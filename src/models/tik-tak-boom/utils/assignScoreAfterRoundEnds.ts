import { IPlayer } from "./../interfaces";

export const assignScoreAfterRoundEnds: (
  players: IPlayer[]
) => IPlayer[] = players => {
  let newPlayers = players.map(player =>
    player.playsNow ? { ...player, isActive: false } : player
  );

  const numOfActivePlayers = newPlayers.filter(player => player.isActive)
    .length;

  if (numOfActivePlayers === 1) {
    newPlayers = newPlayers.map(player =>
      player.isActive
        ? { ...player, numOfBooms: player.numOfBooms + 1 }
        : player
    );
  }

  return newPlayers;
};
