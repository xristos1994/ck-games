import { IPlayer } from "./../interfaces";

export const createNewPlayer: (id: IPlayer["id"]) => IPlayer = id => {
  return {
    id,
    name: "",
    isActive: true,
    playsNow: null,
    startsRound: null,
    numOfBooms: 0,
  };
};
