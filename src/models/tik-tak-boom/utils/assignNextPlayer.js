export const assignNextPlayer = players => {
  const idOfPlayerThatPlaysNow = (players.find(player => player.playsNow) || {})
    .id;
  if (idOfPlayerThatPlaysNow === undefined) {
    const playerShouldPlayNow = players.find(player => player.startsRound);
    return players.map(player => {
      return player.id === playerShouldPlayNow.id
        ? { ...playerShouldPlayNow, playsNow: true }
        : { ...player, playsNow: false };
    });
  }

  const numOfPlayers = players.length;
  for (
    let i = idOfPlayerThatPlaysNow + 1;
    i < idOfPlayerThatPlaysNow + players.length;
    i++
  ) {
    const playerShouldPlayNow = players[i % numOfPlayers];
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
