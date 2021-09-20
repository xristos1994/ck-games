export enum AvailableGames {
  pantomime = 'pantomime',
  tikTakBoom = 'tik-tak-boom'
}
export interface IState {
  websiteStarted: boolean;
  selectedGame: null | AvailableGames;
}
