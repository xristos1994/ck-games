interface IGameStates {
  setPlayers: String;
  setScoreTarget: String;
  waitForRoundStart: String;
  roundInProgress: String;
  setPlayersWhileInProgress: String;
  roundEnded: String;
  gameEnded: String;
}

export const GameStates: IGameStates = {
  setPlayers: "setPlayers",
  setScoreTarget: "setScoreTarget",
  waitForRoundStart: "waitForRoundStart",
  roundInProgress: "roundInProgress",
  setPlayersWhileInProgress: "setPlayersWhileInProgress",
  roundEnded: "roundEnded",
  gameEnded: "gameEnded",
};
