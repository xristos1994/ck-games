export enum AvailableGames {
  pantomime = "pantomime",
  tikTakBoom = "tikTakBoom",
}
export interface IState {
  websiteStarted: boolean;
  selectedGame: null | AvailableGames;
}
