import { IPlayer } from "models/tik-tak-boom/interfaces";

export const assignNextRoundStarter: (
  players: IPlayer[],
  activateAll: boolean
) => IPlayer[] = (players, activateAll) => {
  const idOfCurrentRoundStarter = (
    players.find(player => player.startsRound) || {}
  ).id;
  if (idOfCurrentRoundStarter === undefined) {
    const playerShouldStartRound = players.find(player => player.isActive) as IPlayer;
    return players.map(player => {
      return player.id === playerShouldStartRound.id
        ? {
            ...playerShouldStartRound,
            startsRound: true,
            isActive: activateAll || player.isActive,
          }
        : {
            ...player,
            startsRound: false,
            isActive: activateAll || player.isActive,
          };
    });
  }

  const numOfPlayers = players.length;
  for (
    let i = idOfCurrentRoundStarter + 1;
    i < idOfCurrentRoundStarter + players.length;
    i++
  ) {
    const playerShouldStartRound = players[i % numOfPlayers];
    if (playerShouldStartRound.isActive || activateAll) {
      return players.map(player => {
        return player.id === playerShouldStartRound.id
          ? {
              ...playerShouldStartRound,
              startsRound: true,
              isActive: activateAll || player.isActive,
            }
          : {
              ...player,
              startsRound: false,
              isActive: activateAll || player.isActive,
            };
      });
    }
  }

  return players;
};
