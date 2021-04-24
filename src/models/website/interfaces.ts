export enum AvailableGames {
  pantomime = "puntomime",
  tikTakBoom = "tikTakBoom",
}
export interface IState {
  websiteStarted: boolean;
  selectedGame: null | AvailableGames;
}
